
import adapter from '@activewidgets/frameworks/angular';
import * as sources from '@activewidgets/datagrid/js';
import * as metadata from '@activewidgets/datagrid/metadata';
import * as angular from '@angular/core';

export const {build, Dynamic, VNodes, ForOf, AxModule} = adapter(angular);
export const {Datagrid, Row} = build(sources, metadata);
