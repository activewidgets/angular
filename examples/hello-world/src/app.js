/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import './styles.css';


const template = `<ax-datagrid [rows]="rows"></ax-datagrid>`;


export class App {

    constructor(){
        this.rows = [
            { message: 'Hello, World!' }
        ];
    }


    static get annotations() { return [new Component({
        selector: '#app',
        template
    })]}
}
