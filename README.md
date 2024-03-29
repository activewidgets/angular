
### 

# ActiveWidgets/Angular • Datagrid 

[![npm version](https://img.shields.io/npm/v/@activewidgets/angular)](https://www.npmjs.com/package/@activewidgets/angular "View this project on npm")
[![npm downloads](https://img.shields.io/npm/dm/@activewidgets/angular)](https://www.npmjs.com/package/@activewidgets/angular "npm package downloads/month")
[![Github issues](https://img.shields.io/github/issues/activewidgets/angular)](https://github.com/activewidgets/angular/issues "See Github issues")
[![Github repo](https://img.shields.io/github/stars/activewidgets/angular?label=GitHub&style=social)](https://github.com/activewidgets/angular "Open Github repo")

ActiveWidgets is a multi-framework UI component library. This package provides **datagrid component** for **Angular**.

[Live demo](https://angular.activewidgets.com) / [Developer guide](https://activewidgets.com/guide/) / [API reference](https://activewidgets.com/api/)

[![Datagrid demo](https://cdn.activewidgets.com/assets/screens/demo.png)](https://angular.activewidgets.com)

- [Installation](#installation)
- [Usage](#usage)
- [CDN links](#cdn-links)
- [Data properties](#data-properties)
- [User events](#user-events)


## Installation

Add [@activewidgets/angular](https://activewidgets.com/api/packages/angular/) to your project dependencies -

```sh
> npm i --save @activewidgets/angular
```

## Usage

First you should include `AxModule` in your AppModule imports -

```js
import { AxModule } from "@activewidgets/angular";
import '@activewidgets/angular/css';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Then you can use `ax-datagrid` and other `ax-...` tags in your component templates -

```html
<ax-datagrid [rows]="rows"></ax-datagrid>
```
[Live example](https://angular.activewidgets.com/hello-world/) | [Source on github](https://github.com/activewidgets/angular/tree/master/examples/hello-world) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/angular/tree/master/examples/hello-world?file=src/app.ts)


## Data properties

You have to provide [columns](https://activewidgets.com/api/datagrid/columns/) and [rows](https://activewidgets.com/api/datagrid/rows/) properties to the datagrid to show some data. The properties of each `column` object define how the data will be rendered -

- [field](https://activewidgets.com/api/datagrid/columns/#field) - where the cell data comes from (string|function)
- [header](https://activewidgets.com/api/datagrid/columns/#header) - column header (string|object)
- [width](https://activewidgets.com/api/datagrid/columns/#width) - column width (number, in pixels)
- [align](https://activewidgets.com/api/datagrid/columns/#align) - cell text alignment (left|right|center)
- [format](https://activewidgets.com/api/datagrid/columns/#format) - number/date format (string|function)
- [fixed](https://activewidgets.com/api/datagrid/columns/#fixed) - fixed (true/false) for columns on the left or right side

The `style` (string|object) or `className` properties allow to change the styling of the column and cell elements.

```js
const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120, align: 'right'}
];

const rows = northwind.customers;
```

```html
<ax-datagrid [columns]="columns" [rows]="rows"></ax-datagrid>
```

[Live example](https://angular.activewidgets.com/columns/) | [Source on github](https://github.com/activewidgets/angular/tree/master/examples/columns) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/angular/tree/master/examples/columns?file=src/app.ts)


## User events

In addition to the standard DOM keyboard and mouse events the datagrid emits composite 
[mouse](https://activewidgets.com/api/datagrid/mouse-event/) event which makes it easier to find the elements affected by the user action -

```js
function onMouse({row, column}){
    alert(`row ${row.key} clicked!`);
}
```
```html
<ax-datagrid (mouse)="onMouse($event)" [columns]="columns" [rows]="rows"></ax-datagrid>
```

[Live example](https://angular.activewidgets.com/events/) | [Source on github](https://github.com/activewidgets/angular/tree/master/examples/events) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/angular/tree/master/examples/events?file=src/app.ts)

## More info

- [Live demo](https://react.activewidgets.com) 
- [Developer guide](https://activewidgets.com/guide/) 
- [API reference](https://activewidgets.com/api/)
- [Licensing](https://activewidgets.com/licenses/)
- [Support forum](https://activewidgets.com/messages/)


---

[![ActiveWidgets](https://activewidgets.com/include/logo/aw-logo-40.png)](https://activewidgets.com) 
