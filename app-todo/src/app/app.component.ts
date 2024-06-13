import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { addTodo, removeTodo, toggleTodo } from "../store/counter.actions";
import { AppState } from "../store";
import { selectTodos } from "../store/selectors";
import { Observable } from "rxjs";
import { Todo } from "../store/counter.reducer";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  inputValue = "";

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.pipe(select(selectTodos));
  }

  handleAddTodo() {
    this.store.dispatch(addTodo({ text: this.inputValue.trim() }));
    this.inputValue = "";
  }

  handleToggleTodo(i: number) {
    this.store.dispatch(toggleTodo({ index: i }));
  }
  handleRemoveTodo(i: number) {
    this.store.dispatch(removeTodo({ index: i }));
  }
}
