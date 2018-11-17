import {rootReducer} from '../reducer/root_reducer';
import {logMiddleware,apiMiddleware} from '../store/middleware';

const skill_store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(logMiddleware, apiMiddleware)
);

export default skill_store;
