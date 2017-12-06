import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <p
    class="todo-title"
    [ngClass]="{'todo-complete': isComplete}">
    {{ item.title }}
  </p>
    <input
      type="checkbox"
      (click)="completeItem()">
    <button (click)="removeItem()">
      remove
    </button>
  `,
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  isComplete: boolean = false;

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
