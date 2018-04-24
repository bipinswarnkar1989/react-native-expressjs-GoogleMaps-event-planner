import { combineReducers } from 'redux';
import navReducer from './navReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
    navState:navReducer,
    authState:authReducer,
    eventState:eventReducer,
});

export default rootReducer;