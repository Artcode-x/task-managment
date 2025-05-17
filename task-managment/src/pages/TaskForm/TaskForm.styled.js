import styled from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;

  &:focus {
    border-color: #4caf50; /* Зеленый */
    outline: none;
  }
`

export const Button = styled.button`
  background-color: #4caf50; /* Зеленый */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049; /* Темно-зеленый */
  }
`
