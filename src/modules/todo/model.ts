import { MODULE_NAME, TODO_STATUS } from './constant';

export interface TodoState {
  [MODULE_NAME]?: {
    todos: Todo[],
  };
}

export interface Todo {
  value: string,
  status: TODO_STATUS
}
