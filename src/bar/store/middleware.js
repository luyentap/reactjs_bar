import { axios } from 'axios';
import { set_data_skill } from '../action/action_creater';
import { FETCH_SKILL } from '../action/action_type';


console.log("load middware");
const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log(`Action: ${ action.type }`);

  next(action);
};

const URL ='../db.json';
//sử dụng axion đề fetch data
function fetchData(url, callback) {
  axios.get(url)
    .then(callback)
    .catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === FETCH_SKILL) {
    fetchData(URL, ({ data }) => dispatch(set_data_skill(data)));
  }

  next(action);
};


export { logMiddleware, apiMiddleware };

