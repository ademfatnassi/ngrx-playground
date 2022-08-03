import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models';

export const fetchTodos = createAction(
  '[Add Todo Page] Fetch Todos'
);
export const fetchTodosSuccess = createAction(
  '[Todo API] Fetch Todos Success',
  props<{ todos: Todo[] }>()
);

export const fetchTodosFailed = createAction(
  '[Todo API] Fetch Todos Failed',
  props<{ error: any }>()
);
export const addTodoItemFormSubmitted = createAction(
  '[Add Todo Page] Add Todo Item Form Submitted',
  props<{ todoItem: Todo }>()
);

export const addTodoItemSuccess = createAction(
  '[Todo API] Add Todo Item Success'
);

export const addTodoItemFailed = createAction(
  '[Todo API] Add Todo Item Failed',
  props<{ error: any }>()
);

export const editTodoItemFormSubmitted = createAction(
  '[Edit Todo Page] Edit Todo Item Form Submitted',
  props<{ todoItem: Todo }>()
);
export const editTodoItemSuccess = createAction(
  '[Todo API] Edit Todo Item Success',
  props<{ todoItem: Todo }>()
);

export const editTodoItemFailed = createAction(
  '[Todo API] Edit Todo Item Failed',
  props<{ error: any }>()
);

export const deleteTodoItemInitiated = createAction(
  '[Delete Todo Page] Delete Todo Item Initiated',
  props<{ todoId: number }>()
);

export const deleteTodoItemSuccess = createAction(
  '[Todo API] Delete Todo Item Success',
  props<{ todoId: number }>()
);

export const deleteTodoItemFailed = createAction(
  '[Todo API] Delete Todo Item Failed',
  props<{ error: any }>()
);
