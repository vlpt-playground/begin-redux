import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;