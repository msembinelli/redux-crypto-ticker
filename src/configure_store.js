import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const middlewares = [ReduxPromise, ReduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        middlewareEnhancer
    );

    // TODO: Only hot reload in dev environment!!!
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if(module.hot) {
        module.hot.accept("./reducers", () =>
            store.replaceReducer(require("./reducers").default)
        );
    }

    return store;
}
