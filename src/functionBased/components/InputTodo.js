import React, { useState } from 'react'

const InputTodo = (props) => {

  const [title, setTitle] = useState("")


  const changeHandle = (e) => {

    setTitle(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault();

    if (title.trim()) {
      props.addTodo(title);
      setTitle("")
    } else {
      alert("Please add item")
    }
  }


  return <form onSubmit={submitHandle} className="form-container"  >
    <input type="text" placeholder="Add todo...." onChange={changeHandle} value={title} name="title"
      className="input-text"
    />
    <button button className="input-submit" > Submit</button >
  </form >
}
export default InputTodo





