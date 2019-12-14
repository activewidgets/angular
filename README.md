
[![ActiveWidgets](http://www.activewidgets.com/include/logo/aw-logo-40.png?activewidgets/angular)](http://www.activewidgets.com/)

## Fast datagrid component for Angular

ActiveWidgets 3.0 datagrid, implemented as Angular Component.

- [Examples](https://as.activewidgets.com/)
- [Docs](https://ad.activewidgets.com/)

### Installation

```bash
npm install @activewidgets/angular
```

### Usage

```js
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Module} from '@activewidgets/angular';
import {columns, rows} from './data.js';

class AppComponent {

    constructor(){
        this.rows = rows;
        this.columns = columns;
    }

    static get annotations() { return [new Component({
        selector: '#app',
        template: `
            <ax-datagrid [rows]="rows" [columns]="columns"></ax-datagrid>
        `
    })]}
}


class AppModule {
    static get annotations() { return [new NgModule({
        imports: [BrowserModule, Module],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })]}
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

See http://www.activewidgets.com/
