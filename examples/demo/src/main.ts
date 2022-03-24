/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'zone.js';

import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AxModule } from '@activewidgets/angular';
import { App } from './app';

enableProdMode();

@NgModule({
    imports: [BrowserModule, AxModule],
    declarations: [App],
    bootstrap: [App]
})
class Module { }

platformBrowserDynamic().bootstrapModule(Module);