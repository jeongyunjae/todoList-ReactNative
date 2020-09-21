import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Appnavigator from './src/navigation/index';
import reducer from './src/reducers/todo_reducer';

import todo from './src/sagas/todo';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(todo);

  return (
    <StoreProvider store={store}>
      <Appnavigator />
    </StoreProvider>
  );
};

export default App;
