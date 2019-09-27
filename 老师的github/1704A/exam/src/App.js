import React from 'react';
import './css/style.scss';
import Router from './router/index'
import {Provider} from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
