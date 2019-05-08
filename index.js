
import * as angular from '@angular/core';
import framework from '@activewidgets/frameworks/angular';
import * as components from '@activewidgets/grid';
import * as metadata from '@activewidgets/grid/metadata';

const {build, internal} = framework(angular);

export const {Grid, Row} = build(components, metadata);
export const {Dynamic, VNodes, ForOf, Module} = internal;
