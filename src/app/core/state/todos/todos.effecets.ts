import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import * as TodosActions from './todos.actions';

@Injectable()
export class TodosEffects {
  constructor(
    private _actions$: Actions<any>,
    private _todoService: TodoService
  ) {}

  fetchTodos$ = createEffect(() =>
    this._actions$.pipe(
      // you can pass in multiple actions here that will trigger the same effect
      ofType(TodosActions.fetchTodos.type, TodosActions.addTodoItemSuccess),
      switchMap(() =>
        this._todoService.getItems().pipe(
          map((todoItems) =>
            TodosActions.fetchTodosSuccess({ todos: todoItems })
          ),
          catchError((error) =>
            of(TodosActions.fetchTodosFailed({ error: error }))
          )
        )
      )
    )
  );
  addTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodosActions.addTodoItemFormSubmitted.type),
      switchMap((action) =>
        this._todoService.addItem(action.todoItem).pipe(
          map(() => TodosActions.addTodoItemSuccess()),
          catchError((error) =>
            of(TodosActions.addTodoItemFailed({ error: error }))
          )
        )
      )
    )
  );
  deleteTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodosActions.deleteTodoItemInitiated.type),
      switchMap((action) =>
        this._todoService.deleteItem(action.todoId).pipe(
          map(() =>
            TodosActions.deleteTodoItemSuccess({ todoId: action.todoId })
          ),
          catchError((error) =>
            of(TodosActions.deleteTodoItemFailed({ error: error }))
          )
        )
      )
    )
  );
}
