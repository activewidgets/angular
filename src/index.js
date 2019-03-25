
import * as core from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularBuilder} from '@activewidgets/frameworks';
import {grid, row} from '@activewidgets/grid';

import '@activewidgets/grid/css/index.css';

let declarations = [],
    build = AngularBuilder.init(core, declarations);

export const Grid = build(grid);
export const Row = build(row);
export const Slot = AngularBuilder.Slot;
export const ForOf = AngularBuilder.ForOf;

export class  AxModule {
    static get annotations() { return [new core.NgModule({
        imports: [CommonModule],
        exports: [Slot, ForOf, Grid, Row],
        declarations
    })]}
}
