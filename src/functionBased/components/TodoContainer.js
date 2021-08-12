import React, { useState } from 'react'
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";


const TodoContainer = (props) => {

  const [todos, setTodos] = useState(getInitialTodos())

  const changeHandle = (id) => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const deleteHandle = (id) => {

    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      })
    ])
  }


  const addTodoItem = title => {

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos
  }

  return <div className="container">
    <div className="inner">
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={changeHandle}
            deleteTodoProps={deleteHandle}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </div>
  </div>


}

export default TodoContainer;