/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import converter from '@activewidgets/frameworks/angular';
import {Datagrid as _Datagrid, Row as _Row, Cells as _Cells} from '@activewidgets/datagrid/js';
import * as angular from '@angular/core';

import '@activewidgets/datagrid/dist/datagrid.css';

export const {component: AngularComponent, inject, AxName, AxContent, AxChildren, AxDynamic, AxTemplates, AxModule} = converter(angular);

export const Datagrid = AngularComponent(_Datagrid);
export const Row = AngularComponent(_Row);
export const Cells = AngularComponent(_Cells);
