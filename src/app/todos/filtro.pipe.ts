import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo',
  standalone: true,
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: string): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      case 'todos':
        return todos;
      default:
        return todos;
    }

  }
}
