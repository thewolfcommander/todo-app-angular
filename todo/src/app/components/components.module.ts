import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';



@NgModule({
  declarations: [AddTodoComponent],
  exports: [AddTodoComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
