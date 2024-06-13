import { createAction, props } from "@ngrx/store";

// export const increment = createAction(
//   "[Counter Component] Increment"
// );
// export const decrement = createAction("[Counter Component] Decrement");
// export const reset = createAction("[Counter Component] Reset");

export const addTodo = createAction(
  "[Todo] Add Todo",
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  "[Todo] Toggle Todo",
  props<{ index: number }>()
);
export const removeTodo = createAction(
  "[Todo] Remove",
  props<{ index: number }>()
);
