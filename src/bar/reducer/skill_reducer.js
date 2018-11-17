import { FETCH_SKILL } from './action/action_type';
const reducer = (state, action) => {
  switch (action.type) {

    case FETCH_SKILL:
      return Object.assign({}, state, {
        recipes: action.payload
      });
    default:
      return state;
  }
};


export default reducer;
