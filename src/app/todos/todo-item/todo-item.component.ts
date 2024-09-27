import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../appState.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  public checkCompletado: FormControl;
  public txtInput: FormControl;
  public editando: boolean = false;

  private store = inject(Store<appState>);

  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.todo.texto) return;

    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value,
      })
    );
  }

  borrar() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }

}
