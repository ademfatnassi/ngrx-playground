import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

export const selectTodos = createFeatureSelector<TodosState>('todos');
export const selectTodosItems = createSelector(
  selectTodos,
  (state: TodosState) => state.todoItems
);
export const selectTodoItem = (props: { id: number }) =>
  createSelector(selectTodosItems, (todoItems) =>
    todoItems.find((todo) => todo.id === props.id)
  );
