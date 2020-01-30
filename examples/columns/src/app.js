
import { Component } from '@angular/core';
import { northwind } from "@activewidgets/examples/data";
import './styles.css';


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


    static get annotations() { return [new Component({
        selector: '#app',
        template
    })]}
}
