
import {Component} from '@angular/core';
import {AxModule} from '../';
import {columns, rows} from './data/customers.js';


@Component({
    selector: 'xx',
    template: `<ax-grid [rows]="rows" [columns]="columns"></ax-grid>`
})
class component {
    columns = columns;
    rows = rows;
}


let moduleMetadata = {imports: [AxModule]};

export default () => ({
    component, moduleMetadata
});