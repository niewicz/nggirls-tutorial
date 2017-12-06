import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>
    {{ title }} app
  </h1>

  <todo-list-manager></todo-list-manager>
  `,
})
export class AppComponent {
  title = 'todo';
}
