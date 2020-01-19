
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import {Component, NgModule, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DynamicModule} from 'ng-dynamic-component';

import * as components from '../';
import * as pages from './index.js';
import * as northwind from './northwind.js';

import '../css';


let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


enableProdMode();


const template = `

<ng-template [ngIf]="showIndex">
    <ng-container *ngFor="let section of sections">
        <div class="menu-header">{{section.name}}</div>
        <div class="menu-item"  *ngFor="let item of section.items"><a [href]="item.url">{{item.name}}</a></div>
    </ng-container>
</ng-template>

<ng-template [ngIf]="showComponent">
    <ndc-dynamic [ndcDynamicComponent]="component" [ndcDynamicInputs]="inputs"></ndc-dynamic>
</ng-template>
`;


let lookup = {},
    data = {northwind},
    templates = {};

function toLookup(section, name, content){

    function path(s){
        return '/' + s.replace(/^\W+|\W+$/g, '').replace(/\W+/g, '-').toLowerCase();
    }

    let url = path(section) + path(name);
    lookup[url] = content;
    return '#view' + url;
}


class AppComponent {

    constructor(){

        this.sections = Object.keys(pages).map(section => ({
            name: section,
            items: Object.keys(pages[section]).map(name => ({
                name,
                url: toLookup(section, name, pages[section][name])
            }))
        }));
    }

    ngOnInit(){

        let render = (component, props) => {
            this.component = tags[component];
            this.inputs = props;
        };

        let refresh = () => {

            let name = location.hash.replace(/^#(\w+)/, ''),
                mode = RegExp.$1,
                item = lookup[name];

            this.showIndex = !item;
            this.showComponent = !!item;
            this.showError = location.hash && !item;

            if (typeof item == 'function'){
                item({render}, templates, data);
            }

            this.name = name;
        }

        window.addEventListener("hashchange", Zone.current.wrap(refresh), false);
        refresh();
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
