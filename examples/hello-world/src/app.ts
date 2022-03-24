import { Component} from '@angular/core';

@Component({
  selector: '#app',
  template: '<ax-datagrid [rows]="rows"></ax-datagrid>'
})
export class App {
    rows = [{ message: 'Hello, World!' }];
}