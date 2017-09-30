import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

const render = Component => {
ReactDOM.render(
    <AppContainer>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Component />
      </Provider>
    </AppContainer>
  , document.getElementById('root'));
}

render(App);

if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) });
}
