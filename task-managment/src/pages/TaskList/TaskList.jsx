import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import * as S from "./TaskList.styled"
import TaskForm from "../TaskForm/TaskForm"
import Loader from "../../components/Loader/Loader"

const TaskList = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]) // Все задачи
  const [myTasks, setMyTasks] = useState([]) // Мои задачи
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)
  const [scrollToIndex, setScrollToIndex] = useState(null)
  const [showMyTasks, setShowMyTasks] = useState(false) // Для переключения между задачами
  const taskRefs = useRef([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setTasks(response.data)
        setLoading(false)
      } catch (err) {
        setError("Ошибка при загрузке задач")
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  useEffect(() => {
    if (scrollToIndex !== null) {
      const element = taskRefs.current[scrollToIndex]
      if (element) {
        const topPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: topPosition, behavior: "smooth" })
      }
      setScrollToIndex(null)
    }
  }, [scrollToIndex])

  const handleEdit = (task) => {
    setCurrentTask(task)
    setIsEditing(true)
  }

  const handleDelete = async (title) => {
    try {
      const taskToDelete = tasks.find((task) => task.title === title)
      if (taskToDelete) {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${taskToDelete.id}`
        )
        setTasks(tasks.filter((task) => task.title !== title)) // Удаление из всех задач
        setMyTasks(myTasks.filter((task) => task.title !== title)) // Удаление из моих задач
      } else {
        console.error("Task not found")
      }
    } catch (error) {
      setError("Ошибка при удалении задачи")
    }
  }

  const handleFormSubmit = async (task) => {
    console.log(task)
    if (isEditing) {
      try {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${task.id}`,
          task
        )
        const updatedTasks = tasks.map((t) => (t.id === task.id ? response.data : t))
        setTasks(updatedTasks)
        setMyTasks(myTasks.map((t) => (t.id === task.id ? response.data : t)))
        setIsEditing(false)

        const index = updatedTasks.findIndex((t) => t.id === task.id)
        setScrollToIndex(index)
      } catch (error) {
        setError("Ошибка при обновлении задачи")
      }
    } else {
      try {
        const newTask = {
          userId: 1,
          id: 5,
          title: task.title,
          completed: true
        }
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          newTask
        )
        setTasks((prevTasks) => [...prevTasks, response.data])
        setMyTasks((prevMyTasks) => [...prevMyTasks, response.data]) // Добавляем в мои задачи

        const index = tasks.length
        setScrollToIndex(index)
      } catch (error) {
        setError("Ошибка при создании задачи")
      }
    }
    setCurrentTask(null)
  }

  const showAllTasks = () => {
    setShowMyTasks(false)
  }

  const showMyTasksOnly = () => {
    setShowMyTasks(true)
  }

  const displayedTasks = showMyTasks ? myTasks : tasks

  return (
    <S.TaskContainer>
      {loading ?
        <Loader />
      : error ?
        <div>{error}</div>
      : <>
          <S.ButtonExit onClick={onLogout}>Выйти</S.ButtonExit>
          <S.Htitle>Список задач</S.Htitle>
          <S.Header>
            <S.Button onClick={showAllTasks}>Показать общие задачи</S.Button>
            <S.Button onClick={showMyTasksOnly}>Показать мои задачи</S.Button>
          </S.Header>

          <TaskForm onSubmit={handleFormSubmit} task={currentTask} />
          <S.TaskList>
            {displayedTasks.map((task, index) => (
              <S.TaskCard
                key={`${task.id}-${index}`}
                tabIndex={0}
                ref={(el) => (taskRefs.current[index] = el)}
              >
                <S.TaskTitle>{task.title}</S.TaskTitle>
                <S.ButtonContainer>
                  <S.EditButton onClick={() => handleEdit(task)}>
                    Редактировать
                  </S.EditButton>
                  <S.DeleteButton onClick={() => handleDelete(task.title)}>
                    Удалить
                  </S.DeleteButton>
                </S.ButtonContainer>
              </S.TaskCard>
            ))}
          </S.TaskList>
        </>
      }
    </S.TaskContainer>
  )
}

export default TaskList
