import React, { useState, useEffect } from "react"
import * as S from "./TaskForm.styled"

const TaskForm = ({ onSubmit, task }) => {
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (task) {
      setTitle(task.title)
    } else {
      setTitle("")
    }
  }, [task])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: task ? task.id : Date.now(),
      title
    }
    onSubmit(newTask)
    setTitle("")
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Введите заголовок задачи'
        required
      />
      <S.Button type='submit'>{task ? "Обновить задачу" : "Добавить задачу"}</S.Button>
    </S.FormContainer>
  )
}

export default TaskForm
