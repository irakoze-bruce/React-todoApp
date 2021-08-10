import React, { Component } from 'react'
import style from './TodoItem.module.css'

export class TodoItem extends Component {
  state = {
    editing
      : false
  }

  editHandle = () => {

    this.setState({
      editing: !this.state.editing
    })
    console.log('hey');
  }


  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = 'none'
    } else {
      editMode.display = 'none'
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }


    return <li className={style.item}>
      <div onDoubleClick={this.editHandle}>
        <input type='checkbox' checked={this.props.todo.completed} onChange={() => this.props.changed(this.props.todo.id)} />

        <span style={this.props.todo.completed ? completedStyle : null}> {this.props.todo.title}</span>
        <button onClick={() => this.props.deleted(this.props.todo.id)} className={style.textInput}>Delete</button>
      </div>

      <input type="text"
        className={style.textInput}
        style={editMode}

        onChange={(e, id) => {
          this.props.setUpdate(e.target.value, id)
        }}

        onKeyDown={this.handleUpdatedDone}
      />
    </li>

  }
}

export default TodoItem