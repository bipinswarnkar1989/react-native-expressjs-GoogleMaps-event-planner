import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    navState:navReducer,
    authState:authReducer
});

export default rootReducer;