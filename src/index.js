import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './_reducers/rootReducer';
import { App } from './App/App';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
  )
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);