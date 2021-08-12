import React from 'react'
import TodoItem from './TodoItem'


const TodoList = (props) => {

  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changed={props.changed}
          deleted={props.deleted}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )

}

export default TodoList