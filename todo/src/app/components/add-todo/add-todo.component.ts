import { 
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})



export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addTodoChange = new EventEmitter();

  addTodo(todo) {
    this.addTodoChange.next(todo);
  }

}
