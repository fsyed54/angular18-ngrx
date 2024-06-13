import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";

const storageData = localStorage.getItem("counter") || "0";
export const initialState = JSON.parse(storageData) || 0;
console.log(initialState);

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    localStorage.setItem("counter", JSON.stringify(state + 1));
    return state + 1;
  }),
  on(decrement, (state) => {
    localStorage.setItem("counter", JSON.stringify(state - 1));
    return state - 1;
  }),
  on(reset, (state) => {
    localStorage.setItem("counter", JSON.stringify(0));
    return 0;
  })
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
