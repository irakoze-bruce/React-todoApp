import React from 'react'
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends React.Component {
  state = {
    todos: [
      { id: uuidv4(), title: "setup development", completed: true },
      { id: uuidv4(), title: " setup application", completed: false },
      { id: uuidv4(), title: "dev website", completed: true }
    ]
  }

  changeHandle = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteHandle = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  addTodoItem = title => {

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodo={this.addTodoItem} />
        <TodoList todos={this.state.todos} changed={this.changeHandle}
          deleted={this.deleteHandle}
        />
      </div>
    </div>
  }
}

export default TodoContainer