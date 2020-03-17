import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.item);
  }

}
