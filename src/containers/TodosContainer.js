import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TodoActions } from 'store/actionCreators';

class TodosContainer extends Component {
  handleChange = (e) => {
    // 인풋 값 변경
    TodoActions.changeInput(e.target.value);
  }

  handleInsert = () => {
    // 아이템 추가
    const { input } = this.props;
    TodoActions.insert(input); // 추가하고
    TodoActions.changeInput(''); // 기존 인풋값 비우기
  }

  handleToggle = (id) => {
    // 삭제선 켜고 끄기
    TodoActions.toggle(id);
  }

  handleRemove = (id) => {
    // 아이템 제거
    TodoActions.remove(id);
  }

  render() {
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;

    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  ({ todo }) => ({
    // 일반 객체 다루듯이 다루면 됩니다.
    input: todo.input,
    todos: todo.todos
  })
)(TodosContainer);