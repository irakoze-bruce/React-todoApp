import React, { useState } from 'react'

const InputTodo = (props) => {

  const [inputText, setInputText] = useState({
    title: "",
  })


  const changeHandle = (e) => {

    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandle = (e) => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }


  return <form onSubmit={submitHandle} className="form-container"  >

    <input
      type="text"
      placeholder="Add todo...."
      onChange={changeHandle}
      value={inputText.title}
      name="title"
      className="input-text"
    />
    <button button className="input-submit" > Submit</button >
  </form >

}
export default InputTodo





