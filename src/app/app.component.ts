import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './core/models';
import {
  addTodoItemFormSubmitted,
  deleteTodoItemInitiated,
  editTodoItemFormSubmitted,
  fetchTodos,
  selectTodosItems,
} from './core/state/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-playground';
  todoItems$ = this._store.select(selectTodosItems);
  todo = '';
  errorTodo = false;
  constructor(private _store: Store) {}
  ngOnInit(): void {
    this._store.dispatch(fetchTodos());
  }
  submit() {
    if (this.todo) {
      this.errorTodo = false;
      this._store.dispatch(
        addTodoItemFormSubmitted({
          todoItem: { title: this.todo, completed: false },
        })
      );
      this.todo = '';
    } else {
      this.errorTodo = true;
    }
  }
  deleteTodo(id: number) {
    this._store.dispatch(deleteTodoItemInitiated({ todoId: id }));
  }

  completeTodo(todo: Todo){
    this._store.dispatch(editTodoItemFormSubmitted({todoItem: {...todo, completed: !todo.completed}}))
  }
}
