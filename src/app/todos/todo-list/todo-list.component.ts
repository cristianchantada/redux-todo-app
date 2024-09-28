import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { Todo } from '../models/todo.model';
import { appState } from '../../appState.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from '../filtro.pipe';
import { todoReducer } from '../todo.reducer';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoItemComponent, CommonModule, FiltroPipe],
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public filtroActual: string;

  private store = inject(Store<appState>);

  ngOnInit(){
    this.store.subscribe( ({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }

}
