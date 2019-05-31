
import { combineReducers } from 'redux'
import tasksReducers from 'App/Client/Features/Tasks/Redux/reducers';
import authenticationReducers from 'App/Client/Features/Authentication/Redux/reducers';

export default combineReducers({
    tasksReducers,
    authenticationReducers
});