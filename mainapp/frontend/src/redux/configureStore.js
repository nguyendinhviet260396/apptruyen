import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from './../reducers/index';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootSaga from './../sagas/index';




const composeEnhancers = process.env.NODE_ENV !== 'production'&&
    typeof window === 'object' && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
    })
    :compose;
const sagaMiddleware = createSagaMiddleware()
const configureStore=()=>{
    const middlewares = [thunk, sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducer,composeEnhancers(...enhancers));
    sagaMiddleware.run(rootSaga)
    return store;
}
export default configureStore;