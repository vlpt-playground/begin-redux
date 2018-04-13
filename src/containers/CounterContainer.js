import React, { Component } from 'react';
import Counter from '../components/Counter';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class CounterContainer extends Component {
  @observable number = 0;

  handleIncrement = () => {
    this.number += 1;
  };

  handleDecrement = () => {
    this.number -= 1;
  };

  render() {
    const { number, handleIncrement, handleDecrement } = this;
    return (
      <Counter
        number={number}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    );
  }
}

export default CounterContainer;
