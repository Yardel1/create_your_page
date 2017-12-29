import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  createStore,
  combineReducers
} from 'redux';
import { Provider } from 'react-redux';

import Steps from './store/reducers/steps';
import UserInfo from './store/reducers/userinfo';
import Pictures from './store/reducers/pictures';

const reducer = combineReducers({
  Steps,
  UserInfo,
  Pictures
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
