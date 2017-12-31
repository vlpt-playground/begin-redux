import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import Counter from './Counter';
import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<Counter />}
        todos={<Todos />}
      />
    );
  }
}

export default App;
