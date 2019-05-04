
import {Component} from '@angular/core';
import {Module} from '../';
import {columns, rows} from './data/customers.js';


@Component({
    selector: 'ax-app',
    template: `<ax-grid [rows]="rows" [columns]="columns"></ax-grid>`
})
class component {
    columns = columns;
    rows = rows;
}


let moduleMetadata = {imports: [Module]};

export default () => ({
    component, moduleMetadata
});