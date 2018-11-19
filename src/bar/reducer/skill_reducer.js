import { FETCH_SKILL } from '../action/action_type';

console.log("load skill_reducer");
const initialState = [{
  name: 'Use Redux',
  percent: '20%',
  id: 0
}];
export const skill_reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SKILL:
      // return Object.assign({}, state, {
      //   id: action.id,
      //   name: action.data.name,
      //   percent: action.percent
      // });
      return Object.assign(
          {},state, {
            name: action.load_data,
          }
      );
    default:
      return state;
  }
};


