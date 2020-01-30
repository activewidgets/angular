
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {Component, NgModule, enableProdMode} from '@angular/core';
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
        <ndc-dynamic [ndcDynamicComponent]="component" [ndcDynamicInputs]="inputs"></ndc-dynamic>
    </ng-template>
`;


class AppComponent {

    ngOnInit(){

        let mount = (component, props) => {
            this.component = tags[component];
            this.inputs = props;
        };


        let clean = () => {
            this.component = null;
            this.inputs = {};
        };


        let viewer = new Viewer({
            target: document.body,
            props: {framework, pkg, logo, readme, pages, mount, clean}
        });

    }

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
