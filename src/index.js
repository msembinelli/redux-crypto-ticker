import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configure_store'

import App from './components/app';
import reducers from './reducers';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  , document.getElementById('root'));
