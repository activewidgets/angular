
[Open fullscreen](https://angular.activewidgets.com/hello-world/) | [Source on github](https://github.com/activewidgets/angular/tree/master/examples/hello-world) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/angular/tree/master/examples/hello-world?file=src/app.ts)

This is a small example to get started with ActiveWidgets components for Angular.

First, import the library and add it to the application module imports:

```js
import { AxModule } from '@activewidgets/angular';
// ...
@NgModule({
    imports: [BrowserModule, AxModule],
// ...
```

Then initialize or load the data array:

```js
this.rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```html
<ax-datagrid [rows]="rows"></ax-datagrid>
```

Read more:

 - [Angular Datagrid - Get started](https://activewidgets.com/guide/env/angular/)