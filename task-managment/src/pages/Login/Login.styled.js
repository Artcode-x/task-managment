import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4caf50;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  margin: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 480px) {
    padding: 20px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  transition: box-shadow 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`

export const Button = styled.button`
  background-color: #e53935;
  color: white;
  padding: 15px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: #d32f2f;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const ErrorMessage = styled.p`
  color: #e53935;
  text-align: center;
  margin-bottom: 10px;
`
