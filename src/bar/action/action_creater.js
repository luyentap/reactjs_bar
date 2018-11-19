import { FETCH_SKILL, SET_SKILL } from './action_type';

console.log("action creater");

// const fecth_data_skill = (skill) => {
//   console.log("fetch");
// }
// const set_data_skill = (skill) => {
//   console.log("set");

// }
const fecth_data_skill = (skill) => ({
    type: FETCH_SKILL,
  }
);
const set_data_skill = (skill) => ({
    type: SET_SKILL,
    load_data: skill,
    
  }
);


export { fecth_data_skill, set_data_skill, };

