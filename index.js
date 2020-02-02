/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/angular';
import * as sources from '@activewidgets/datagrid/js';
import * as metadata from '@activewidgets/datagrid/metadata';
import * as angular from '@angular/core';

export const {build, Dynamic, VNodes, AxName, AxModule} = adapter(angular);
export const {Datagrid, Row} = build(sources, metadata);
