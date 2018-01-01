import React, { Component } from 'react';
import CounterContainer from 'containers/CounterContainer';
import AppTemplate from './AppTemplate';
import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
        todos={<Todos />}
      />
    );
  }
}

export default App;
