﻿/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';

import {Component, ChangeDetectorRef, NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DynamicModule} from 'ng-dynamic-component';

import {Viewer} from '@activewidgets/examples';
import * as components from '@activewidgets/angular';
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './angular.svg';
import pkg from '../../package.json';

import '../../css';


let framework = 'Angular';


let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


enableProdMode();


let template = `
    <ng-template [ngIf]="component">
        <ndc-dynamic [ndcDynamicComponent]="component" [ndcDynamicInputs]="inputs" [ndcDynamicOutputs]="outputs"></ndc-dynamic>
    </ng-template>
`;


class AppComponent {

    constructor(cdr){
        this.cdr = cdr;
    }

    ngOnInit(){

        let mount = (component, props) => {

            this.component = tags[component];

            this.inputs = {};
            this.outputs = {};

            Object.keys(props).forEach(i => {
                if (i.indexOf('on') === 0){
                    this.outputs[i.slice(2).toLowerCase()] = props[i];
                }
                else {
                    this.inputs[i] = props[i];
                }
            });

            this.cdr.detectChanges();
        };


        let clean = () => {
            this.component = null;
            this.inputs = {};
            this.outputs = {};
            this.cdr.detectChanges();
        };


        let viewer = new Viewer({
            target: document.body,
            props: {framework, pkg, logo, readme, pages, mount, clean}
        });

    }

    static get parameters() { return [
        ChangeDetectorRef
    ]}

    static get annotations() { return [new Component({
        selector: '#app',
        template
    })]}
}


class AppModule {
    static get annotations() { return [new NgModule({
        imports: [BrowserModule, DynamicModule.withComponents([components.Datagrid]), components.AxModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })]}
}


platformBrowserDynamic().bootstrapModule(AppModule);
