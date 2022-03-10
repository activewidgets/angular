/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


const template = `<ax-datagrid [columns]="columns" [rows]="rows" (init)="onInit($event)" (click)="onClick($event)"></ax-datagrid>`;


export class App {

    constructor(){
        this.columns = columns;
        this.rows = rows;
    }


    onInit(api){
        this.gridAPI = api;
    }
    
    
    onClick(event){
        let cell = this.gridAPI.cellFromElement(event.target); 
        if (cell && cell.section === 'main') {
            alert(`row ${cell.row.index + 1} clicked!`);
        }
    }
    

    static get annotations() { return [new Component({
        selector: '#app',
        template
    })]}
}
