import React, { Component } from 'react';
import Counter from '../components/Counter';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject(stores => {
  return {
    number: stores.counter.number,
    increase: stores.counter.increase,
    decrease: stores.counter.decrease
  };
})
@observer
class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increase();
  };

  handleDecrement = () => {
    this.props.decrease();
  };

  render() {
    const { number } = this.props;
    const { handleIncrement, handleDecrement } = this;
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
