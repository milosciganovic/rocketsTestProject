import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import RootReducer from './reducers';

const Store = createStore(RootReducer, applyMiddleware(thunk));
export type RootStoreType = ReturnType<typeof RootReducer>

export default Store;