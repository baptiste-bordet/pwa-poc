import { MODULE_NAME, TODO_STATUS } from './constant';

export interface TodoState {
  todos?: TodoItem[],
}

export type TodoItem = {
  id?: string,
  value: string,
  status: TODO_STATUS
}
