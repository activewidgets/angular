
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
