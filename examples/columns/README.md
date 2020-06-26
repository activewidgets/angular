
[Open fullscreen](/columns/) | [Source on github](https://github.com/activewidgets/angular/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/angular/tree/master/examples/columns)

This example shows how to configure datagrid columns:

```js

const template = `<ax-datagrid [columns]="columns" [rows]="rows"></ax-datagrid>`;

export class App {

    constructor(){

        this.columns = [
          {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
          {header: 'Company Name', field: 'companyName', width: 160},
          {header: 'Contact', field: 'contactName', width: 120},
          {header: 'Title', field: 'contactTitle', width: 120},
          {header: 'Address', field: 'address', width: 120},
          {header: 'City', field: 'city'},
          {header: 'Zip', field: 'postalCode', align: 'right'},
          {header: 'Phone', field: 'phone'},
          {header: 'Fax', field: 'fax'},
          {header: 'Country', field: 'country'}
        ];

        this.rows = northwind.customers;
    }

    // ...
}
```

Assign an array of column descriptor objects to the [columns](https://activewidgets.com/api/datagrid/columns/) property.

Read more:

- [Angular Datagrid - Get started](https://activewidgets.com/guide/env/angular/#data-properties)
- [API - columns](https://activewidgets.com/api/datagrid/columns/)
- [API - rows](https://activewidgets.com/api/datagrid/rows/)