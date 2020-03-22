import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
}

export interface Todo {
  title: string;
  completed: boolean;
}

export interface AppData {
  todos: Array<Todo>;
}
