
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
