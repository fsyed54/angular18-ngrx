import { AppState } from ".";
import { createSelector } from "@ngrx/store";

export const selectTodos = (state: AppState) => state.todos.todos;

export const selectTodosProp = createSelector(selectTodos, (todos) => todos);
