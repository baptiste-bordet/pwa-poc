import { FORM_NAME } from './constant';

export interface FormState {
}

export interface FormPayload {
  name: FORM_NAME,
  value: string
}

export type FormItem = {
  value: string,
  error: string,
}
