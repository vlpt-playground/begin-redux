import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Todos from '../components/Todos';

@observer
class TodoList extends Component {
  @observable
  todos = [
    {
      id: 0,
      text: '리덕스도 배웠으면',
      checked: true
    },
    {
      id: 1,
      text: 'MobX 도 배워보는건 어떨까',
      checked: false
    }
  ];
  id = 2;

  @observable input = '';

  handleChange = e => {
    this.input = e.target.value;
  };

  handleInsert = e => {
    this.todos.push({
      id: this.id++,
      text: this.input,
      checked: false
    });
    this.input = '';
  };

  handleToggle = id => {
    const todo = this.todos.find(todo => todo.id === id);
    todo.checked = !todo.checked;
  };

  handleRemove = id => {
    const todo = this.todos.find(todo => todo.id === id);
    this.todos.remove(todo);
  };

  render() {
    return (
      <div>
        <Todos
          todos={this.todos}
          input={this.input}
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
