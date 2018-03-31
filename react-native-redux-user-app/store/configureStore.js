import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = initialState => {
    const middlewares = [
        thunk
    ];

    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middlewares)),
        window.devToolsExtension ? window.devToolsExtension() : f => f // add support form redux dev tools
    );
    if (module.hot) {
        //Enable Webpack hot module replacement from reducers
        module.hot.accept('../reducers', () => {
          const nextReducer = require('../reducers').default; // eslint-disable-line global-require
          store.replaceReducer(nextReducer);
        });
     };

     return store;
};

export default configureStore;