import React from "react";
import { observer } from "mobx-react";

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => (
  <li
    style={{
      textDecoration: checked ? "line-through" : "none"
    }}
    onClick={() => onToggle(id)}
    onDoubleClick={() => onRemove(id)}
  >
    {text}
  </li>
);

const Todos = ({ todos, input, onInsert, onToggle, onRemove, onChange }) => {
  const todoItems = todos.map(todo => {
    const { id, text, checked } = todo;
    return (
      <TodoItem
        id={id}
        checked={checked}
        text={text}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    );
  });
  return (
    <div>
      <h2>오늘 할 일</h2>
      <input value={input} onChange={onChange} />
      <button onClick={onInsert}>추가</button>
      <ul>{todoItems}</ul>
    </div>
  );
};

Todos.defaultProps = {
  todos: [
    {
      id: 0,
      text: "걷기",
      checked: false
    },
    {
      id: 1,
      text: "코딩하기",
      checked: true
    }
  ],
  input: ""
};

export default observer(Todos);
