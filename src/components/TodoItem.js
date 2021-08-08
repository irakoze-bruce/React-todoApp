import React from 'react'
function TodoItem(props) {
  return <li>
    <input type='checkbox' checked={props.todo.completed} onChange={() => props.changed(props.todo.id)} />
    {props.todo.title}

    <button onClick={() => props.deleted(props.todo.id)}>Delete</button></li>
}
export default TodoItem