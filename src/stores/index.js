import CounterStore from './counter';
import TodosStore from './todos';

export default class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.todos = new TodosStore(this);
  }
}
