import styled from "styled-components"

export const Htitle = styled.div`
  text-align: center;
  font-size: 23px;
  padding-bottom: 10px;
`
export const Header = styled.div`
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: normal;
  flex-wrap: nowrap;
  justify-content: center;
`

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }
`
export const ButtonExit = styled(Button)`
  background-color: #dc3545;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`
export const TaskContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`

export const TaskCard = styled.li`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`

export const TaskTitle = styled.h3`
  font-size: 1.2em;
  margin: 0 0 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53935;
  }
`
