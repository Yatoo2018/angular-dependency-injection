import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EditTodoComponent
  ],
  exports: [
    EditTodoComponent
  ]
})
export class TodoModule { }