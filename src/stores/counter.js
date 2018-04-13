import { observable, action } from 'mobx';

export default class CounterStore {
  constructor(root) {
    this.root = root;
  }
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  };

  @action
  decrease = () => {
    this.number--;
  };
}
