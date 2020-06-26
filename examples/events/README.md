
[Open fullscreen](/events/) | [Source on github](https://github.com/activewidgets/angular/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/angular/tree/master/examples/events)

The datagrid emits composite [mouse](https://activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```js
const template = `<ax-datagrid (mouse)="onMouse($event)" [columns]="columns" [rows]="rows"></ax-datagrid>`;

// ...

onMouse({row}){
    alert(`row ${row.key} clicked!`);
}
```

Read more:

- [Angular Datagrid - Get started](https://activewidgets.com/guide/env/angular/#user-events)
- [API - mouse event](https://activewidgets.com/api/datagrid/mouse-event/)