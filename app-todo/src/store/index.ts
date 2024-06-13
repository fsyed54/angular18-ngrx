import { ActionReducerMap } from "@ngrx/store";
import * as fromTodo from "./counter.reducer";

export interface AppState {
  todos: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
};
