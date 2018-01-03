import { createStore } from 'redux';
import modules from './modules';

const configureStore = () => {
  // const store = createStore(modules);
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(modules, devTools);
  
  if (module.hot) {
    module.hot.accept('./modules', () => store.replaceReducer(modules))
  }

  return store;
}

export default configureStore;
