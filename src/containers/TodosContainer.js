import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Todos from '../components/Todos';

@inject('todos')
@observer
class TodoList extends Component {
  handleChange = e => {
    const { todos } = this.props;
    todos.setInput(e.target.value);
  };

  handleInsert = e => {
    const { todos } = this.props;
    todos.create(todos.input);
    todos.setInput('');
  };

  handleToggle = id => {
    const { todos } = this.props;
    todos.toggle(id);
  };

  handleRemove = id => {
    const { todos } = this.props;
    todos.remove(id);
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <Todos
          todos={todos.todos}
          input={todos.input}
          onChange={this.handleChange}
          onInsert={this.handleInsert}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoList;
