
import * as core from '@angular/core';
import AX from '@activewidgets/frameworks/angular';
import {grid, row} from '@activewidgets/grid';

let {component, module, internal} = AX(core);

export const Row = component({
    selector: 'ax-row',
    inputs: ['row', 'columns'],
    source: row
});

export const Grid = component({
    selector: 'ax-grid',
    inputs: ['columns', 'rows', 'templates'],
    source: grid
});

export const Dynamic = internal.Dynamic;
export const VNodes = internal.VNodes;
export const ForOf = internal.ForOf;

export const AxModule = module(Row, Grid);

