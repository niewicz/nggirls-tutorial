import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {
  constructor(private storage: TodoListStorageService) {}

  getTodoList() {
    return this.storage.get();
  }

  addItem(title) {
    return this.storage.post({ title: title });
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }
}
