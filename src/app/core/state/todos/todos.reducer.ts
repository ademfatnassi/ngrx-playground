import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';
import { initialState, TodosState } from './todos.state';

const todosReducer = createReducer(
  initialState,
  on(TodosActions.fetchTodosSuccess, (state, { todos }) => ({
    ...state,
    todoItems: todos,
  })),
  on(TodosActions.deleteTodoItemSuccess, (state, { todoId }) => {
    const todoItemIndex = state.todoItems.findIndex(
      (item) => item.id === todoId
    );
    const updatedTodoItems = [...state.todoItems];
    updatedTodoItems.splice(todoItemIndex, 1);
    return {
      ...state,
      todoItems: updatedTodoItems,
    };
  }),
  on(TodosActions.editTodoItemSuccess, (state, { todoItem }) => {
    const todoItemIndex = state.todoItems.findIndex(
      (item) => item.id === todoItem.id
    );
    const updatedTodoItems = [...state.todoItems];
    updatedTodoItems[todoItemIndex] = todoItem;
    return {
      ...state,
      todoItems: updatedTodoItems,
    };
  }),
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
