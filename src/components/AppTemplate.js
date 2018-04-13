import React from 'react';
import './AppTemplate.css';
import DevTools from 'mobx-react-devtools';

const AppTemplate = ({counter, todos}) => {
  return (
    <div className="app-template">
      <div className="counter">{counter}</div>
      <div className="todos">{todos}</div>
      <DevTools />
    </div>
  );
};

export default AppTemplate;