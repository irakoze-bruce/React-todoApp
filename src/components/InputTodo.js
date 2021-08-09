import React, { Component } from 'react'


class InputTodo extends Component {

  state = {
    title: ""
  }

  changeHandle = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandle = (e) => {
    e.preventDefault();

    if (this.state.title.trim()) {

      this.props.addTodo(this.state.title);
      this.setState({
        title: ""
      });
    } else {
      alert("Please add item")
    }
  }

  render() {

    return <form onSubmit={this.submitHandle} className="form-container"  >
      <input type="text" placeholder="Add todo...." onChange={this.changeHandle} value={this.state.title} name="title"
        className="input-text"
      />
      <button button className="input-submit" > Submit</button >
    </form >
  }
}

export default InputTodo