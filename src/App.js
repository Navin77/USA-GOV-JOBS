import React from 'react';
import Root from './containers/root';
import { Provider } from 'react-redux';
import store from './store/store';

const App = ()=>{
  return (
    <Provider store={store} >
      <Root />
    </Provider>
  );
};

export default App;
