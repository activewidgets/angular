
import { Component } from '@angular/core';
import { northwind } from '@activewidgets/examples/data';
import * as flags from '@activewidgets/examples/flags';
import options from './options';
import template from './app.html';
import './styles.css';


export class App {

    constructor(){

        this.columns = [
            { header: 'Company', template: 'company', fixed: true },
            { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
            { header: 'Address', template: 'address', key: 'address' },
            { header: 'Country', type: 'country flag', field: 'country' },
            { header: 'Phone/Fax', type: 'phone & fax'},
            { header: 'Last Order', type: 'money', field: 'amount' },
            { header: 'Order Date', type: 'date', field: 'date' }
        ];

        this.rows = northwind.customers;
        this.options = options;
        this.flags = flags;
    }


    onRow(row){

        const {data, cells} = row;

        // calculated values
        cells.amount = 2000 * Math.random();
        cells.date = Date.now() - 500 * 86400000 * Math.random();


        // dynamic row style
        if (data.country == 'France'){
            row.class = 'bg-green';
        }

        // dynamic cell styles
        if (data.city == 'London'){
            cells.address = {class: 'circle'};
        }

        if (data.contactTitle == 'Owner'){
            cells.contact = {class: 'star'};
        }
    }


    static get annotations() { return [new Component({
        selector: '#app',
        template
    })]}
}
