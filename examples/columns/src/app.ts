/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { northwind } from "@activewidgets/examples/data";


@Component({
    selector: '#app',
    template: `<ax-datagrid [columns]="columns" [rows]="rows"></ax-datagrid>`
})
export class App {

    columns = [
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

    rows = northwind.customers;
}
