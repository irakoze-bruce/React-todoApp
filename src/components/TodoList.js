import React from 'react'
import TodoItem from './TodoItem'
class TodoList extends React.Component {

  render() {

    return <div>
      <ul>
        {this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} changed={this.props.changed}
          deleted={this.props.deleted}
        />)}
      </ul>
    </div>
  }
}

export default TodoList