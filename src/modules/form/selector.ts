import { get } from 'lodash';
import { MODULE_NAME } from "./constant";


const getFormValues = (state: any) => {
  const values = {};
  const form = get(state, [MODULE_NAME], {});

  Object.keys(form).map((name: any) => {
    values[name] = form[name]['value']
  });

  return values;
};

const selector = {
  getFormValues
};

export default selector;
