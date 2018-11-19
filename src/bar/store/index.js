import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducer/root_reducer';
import { apiMiddleware, logMiddleware } from './middleware';

// console.log("load skill_store==root_store");
console.log("load store");
export const root_store = createStore(
  rootReducer,
  applyMiddleware(logMiddleware, apiMiddleware),
  
);






// console.log(skill_store.getState().skill_reducer[0].name);
// skill_store.dispatch(set_data_skill('SET_SKILL'));


