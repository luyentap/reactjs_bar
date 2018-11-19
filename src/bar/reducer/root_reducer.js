import { combineReducers } from 'redux';
import { skill_reducer } from './skill_reducer';


console.log("load rootreducer");
export const rootReducer = combineReducers({
  skill_reducer,

})

