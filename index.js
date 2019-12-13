
import adapter from '@activewidgets/frameworks/angular';
import * as sources from '@activewidgets/grid/js';
import * as metadata from '@activewidgets/grid/metadata';
import * as angular from '@angular/core';

export const {build, Dynamic, VNodes, ForOf, Module} = adapter(angular);
export const {Grid, Row} = build(sources, metadata);
