import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { appState } from '../../appState.reducer';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'todo-page',
  standalone: true,
  templateUrl: './todo-page.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [TodoAddComponent, TodoListComponent, TodoFooterComponent],
})
export class TodoPageComponent {

  public completado: boolean = false;

  private store = inject(Store<appState>);

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({completado: this.completado}))
  }
  
}
