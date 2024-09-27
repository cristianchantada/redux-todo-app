import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../../appState.reducer';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-footer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFooterComponent {

  public filtroActual: filtrosValidos = 'todos';
  public filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  public pendientes: number = 0;

  private store = inject(Store<appState>);

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro);
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    });

  }

  cambiarFiltro(filtro: filtrosValidos) {
    this.store.dispatch(setFiltro({filtro: filtro}))
  }


}
