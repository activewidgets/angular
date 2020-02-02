/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AxModule } from '@activewidgets/angular';

import '@activewidgets/angular/css';

import { App } from './app.js';


enableProdMode();


class Module {
    static get annotations() { return [new NgModule({
        imports: [BrowserModule, AxModule],
        declarations: [App],
        bootstrap: [App]
    })]}
}

platformBrowserDynamic().bootstrapModule(Module);

