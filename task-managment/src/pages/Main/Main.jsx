import React, { useState, useEffect } from "react"
import * as S from "./Main.styled"
import Login from "../Login/Login"
import TaskList from "../TaskList/TaskList"
import Loader from "../../components/Loader/Loader"

const Main = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [token])

  const handleLogin = (token) => {
    setToken(token)
    localStorage.setItem("token", token)
  }

  const handleLogout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  return (
    <S.Container>
      {loading ?
        <Loader />
      : token ?
        <TaskList onLogout={handleLogout} />
      : <Login onLogin={handleLogin} />}
    </S.Container>
  )
}

export default Main
