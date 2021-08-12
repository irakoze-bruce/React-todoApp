import React, { Component, useEffect, useState } from 'react'
import style from './TodoItem.module.css'

const TodoItem = props => {

  const [editing, setEditing] = useState(false)

  const editHandle = () => {

    setEditing(true)
  }


  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = 'none'
  } else {
    editMode.display = 'none'
  }

  const { completed, id, title } = props.todo

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])
  return <li className={style.item}>
    <div onDoubleClick={editHandle}>
      <input type='checkbox'
        checked={completed}
        onChange={() => props.changed(id)} />

      <span style={completed ? completedStyle : null}> {title}</span>
      <button
        onClick={() => props.deleted(id)}
        className={style.textInput}>Delete</button>
    </div>

    <input type="text"
      className={style.textInput}
      style={editMode}

      onChange={(e, id) => {
        props.setUpdate(e.target.value, id)
      }}

      onKeyDown={handleUpdatedDone}
    />
  </li>

}
export default TodoItem