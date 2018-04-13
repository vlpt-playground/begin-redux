import React from 'react';
import { Provider } from 'mobx-react';
import App from './components/App';
import RootStore from './stores';

const store = new RootStore();

const Root = () => {
  return (
    <Provider {...store}>
      <App />
    </Provider>
  );
};

export default Root;
