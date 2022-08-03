import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as TodosReducer from "./todos/todos.reducer";

export const reducers: ActionReducerMap<State> = {
  todos: TodosReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
