import { combineReducers } from 'redux';
import AppReducer from './appReducer/AppReducer';
import DataReducer from './dataReducer/DataReducer';

const RootReducer = combineReducers({
    app: AppReducer,
    data: DataReducer
});

export default RootReducer;