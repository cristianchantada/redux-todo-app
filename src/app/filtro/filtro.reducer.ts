import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';

export const initialState = 'todos';

export const _filtroReducer = createReducer(
  initialState,
  on(actions.setFiltro, (state, { filtro }) => filtro)
);

// Función reductora final
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
