import { combineReducers } from 'redux'
import authenticationReducer from './authentication'


const allReducers = combineReducers({
    authentication: authenticationReducer,
});

export default allReducers;