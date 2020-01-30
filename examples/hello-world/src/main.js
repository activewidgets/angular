
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

