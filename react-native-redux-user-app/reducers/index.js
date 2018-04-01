import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer'

const combinedReducers = combinedReducers({
    navState:navReducer,
    authState:authReducer
});

export default combinedReducers;