import { Action, createReducer, on } from "@ngrx/store";
import { addTodo, removeTodo, toggleTodo } from "./counter.actions";
export interface Todo {
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const storageData = localStorage.getItem("todos") || "{}";
localStorage.setItem("todos", storageData);

const todosss = JSON.parse(storageData);

export const initialState: TodoState = {
  todos: todosss.todos || [],
};
console.log(initialState, "initialState");
export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => {
    const newTodo = {
      ...state,
      todos: [...state.todos, { text, completed: false }],
    };
    localStorage.setItem("todos", JSON.stringify(newTodo));
    return newTodo;
  }),
  on(toggleTodo, (state, { index }) => {
    const newTodo = {
      ...state,
      todos: state.todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      ),
    };
    localStorage.setItem("todos", JSON.stringify(newTodo));
    return newTodo;
  }),
  on(removeTodo, (state, { index }) => {
    const newTodo = {
      ...state,
      todos: state.todos.filter((todo, i) => i !== index),
    };
    localStorage.setItem("todos", JSON.stringify(newTodo));
    return newTodo;
  })
);
