import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'todo-footer',
  standalone: true,
  templateUrl: './todo-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFooterComponent {}
