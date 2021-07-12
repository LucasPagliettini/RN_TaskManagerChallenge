import { combineReducers } from 'redux';
import taskReducer from './taskRecucer';

const rootReducer = combineReducers({
  taskReducer,
});

export default rootReducer;
