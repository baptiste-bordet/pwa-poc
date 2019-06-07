import { createAction, createReducer } from "redux-act";
import { FORM_NAME, MODULE_NAME } from "./constant";
import { FormPayload, FormState } from "./model";
import produce from "immer";
import { get, set } from 'lodash';
import selector from './selector';


const initState = {
  [FORM_NAME.ADD_TODO]: { value: '' }
};

// ACTIONS
const setForm = createAction<FormPayload>(`${MODULE_NAME}/SET_FORM`);
const clearForm = createAction<string>(`${MODULE_NAME}/CLEAR_FORM`);


// REDUCERS
const _setForm = (state: FormState, payload: FormPayload) =>
  produce(state, draft => {
    set(draft, [payload.name, 'value'], payload.value)
  });

const _clearForm = (state: FormState, name: string) =>
  produce(state, draft => {
    set(draft, [name], {value: '', error: ''})
  });


const reducer = createReducer({
  [setForm.toString()]: (state: FormState, payload: FormPayload) =>
    _setForm(state, payload),
  [clearForm.toString()]: (state: FormState, name: string) =>
    _clearForm(state, name),
}, initState);

export default {
  initState,
  reducer,
  selector,
  actions: {
    setForm,
    clearForm
  }
}
