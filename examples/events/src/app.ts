/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { columns, rows } from "@activewidgets/examples/data";


@Component({
    selector: '#app',
    template: `<ax-datagrid [columns]="columns" [rows]="rows" (init)="onInit($event)" (click)="onClick($event)"></ax-datagrid>`
})
export class App {

    columns = columns;
    rows = rows;
    gridAPI = null as any;

    onInit(api: any){
        this.gridAPI = api;
    }

    onClick(event: any){
        let cell = this.gridAPI.cellFromElement(event.target); 
        if (cell && cell.section === 'main') {
            alert(`row ${cell.row.index + 1} clicked!`);
        }
    }
}
