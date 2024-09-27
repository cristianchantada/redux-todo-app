import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { Todo } from '../models/todo.model';
import { appState } from '../../appState.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [TodoItemComponent],
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  private store = inject(Store<appState>);

  ngOnInit(){
    this.store.select('todos').subscribe( todos => this.todos = todos);
  }


}
