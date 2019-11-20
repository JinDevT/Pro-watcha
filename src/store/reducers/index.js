import { combineReducers } from 'redux';
import ActionReducer from './reducerAction';

const rootReducer = combineReducers({
    action: ActionReducer,
})

export default rootReducer;