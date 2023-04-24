/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { northwind } from '@activewidgets/examples/data';
import * as flags from '@activewidgets/examples/flags';
import options from './options';


@Component({
    selector: '#app',
    template: `

    <ax-datagrid [columns]="columns" [rows]="rows" [calc]="calc" [options]="options">
    
        <ng-template #company let-data="data">
            <div>
                <div class="bold blue">{{data.customerID}}</div>
                <div class="small">{{data.companyName}}</div>
            </div>
        </ng-template>
    
        <ng-template #contact let-data="data">
            <div>
                <div class="bold">{{data.contactName}}</div>
                <div class="small">{{data.contactTitle}}</div>
            </div>
        </ng-template>
    
        <ng-template #address let-data="data">
            <div>
                <div class="small">{{data.address}}</div>
                <div class="small">{{data.postalCode}} <span>{{data.city}}</span></div>
            </div>
        </ng-template>
    
        <ng-template #country let-text="text">
            <div><img [src]="flags[text]"/>{{text}}</div>
        </ng-template>
    
        <ng-template #phone let-data="data">
            <div>
                <div class="small phone">{{data.phone}}</div>
                <div class="small fax">{{data.fax}}</div>
            </div>
        </ng-template>
    
    </ax-datagrid>`
    
})
export class App {

    columns = [
        { header: 'Company', template: 'company', fixed: true },
        { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
        { header: 'Address', template: 'address', key: 'address' },
        { header: 'Country', type: 'country flag', field: 'country' },
        { header: 'Phone/Fax', type: 'phone & fax'},
        { header: 'Last Order', type: 'money', field: 'amount' },
        { header: 'Order Date', type: 'date', field: 'date' }
    ];

    rows = northwind.customers;

    calc(){
        return {
            amount: 2000 * Math.random(),
            date: Date.now() - 500 * 86400000 * Math.random()
        };
    }
    
    options = options;
    flags = flags as {[index: string]: string};
}
