/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


const template = `<ax-datagrid [columns]="columns" [rows]="rows" (mouse)="onMouse($event)"></ax-datagrid>`;


export class App {

    constructor(){
        this.columns = columns;
        this.rows = rows;
    }


    onMouse({row}){
        alert(`row ${row.key} clicked!`);
    }


    static get annotations() { return [new Component({
        selector: '#app',
        template
    })]}
}
