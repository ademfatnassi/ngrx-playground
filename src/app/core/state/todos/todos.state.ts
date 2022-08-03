import { Todo } from '../../models';
/**
 * The interface TodosState defines the type of 
 * object Todo's state will have
 */
export interface TodosState {
  todoItems: Todo[];
}
/**
 * initialState, represents the initial state of 
 * the state object when the store is first initialized
 */
export const initialState: TodosState = {
  todoItems: [],
};
