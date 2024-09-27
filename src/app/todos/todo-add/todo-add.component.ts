import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../appState.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent {
  public txtInput: FormControl = new FormControl('', Validators.required);

  private store = inject(Store<appState>);

  agregar() {
    if (!this.txtInput.valid) return;
    this.store.dispatch(actions.crear({ texto: this.txtInput.value }));
    this.txtInput.reset();
  }
}
