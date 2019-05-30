import { get } from 'lodash';
import { MODULE_NAME, TODO as T } from "./constant";


const getTodos = (state: any) => {
  return get(state, [MODULE_NAME, T.todos], []);
};

const selector = {
  getTodos
};

export default selector;
