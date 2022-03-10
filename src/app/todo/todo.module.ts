import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EditTodoComponent, ShowTodoComponent],
  exports: [EditTodoComponent, ShowTodoComponent],
  // providers: [DatePipe]
})
export class TodoModule {}
