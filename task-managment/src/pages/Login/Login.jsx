import React, { useRef, useState } from "react"
import * as S from "./Login.styled"

const Login = ({ onLogin }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (email === "user@example.com" && password === "12345") {
      const token = "fake-token"
      onLogin(token)
    } else {
      setError("Неверный логин или пароль")
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <S.Input type='email' ref={emailRef} placeholder='user@example.com' required />
        <S.Input type='password' ref={passwordRef} placeholder='12345' required />
        <S.Button type='submit'>Войти</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default Login
