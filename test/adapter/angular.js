

import {getQueriesForElement} from '@testing-library/dom';
import {TestBed} from '@angular/core/testing';
import * as components from '@activewidgets/components';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

    TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting()
    );

let AxModule = components.AxModule;

let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


export function mount(comp, props){

    let Component = tags[comp];

    if (!Component){
        throw new Error('component not found - ' + comp);
    }

    TestBed.configureTestingModule({
        imports: [AxModule]
    });

    let fixture = TestBed.createComponent(Component),
        component = fixture.componentInstance;

    for(let i in props){
        if (i.slice(0, 2) == 'on'){
            component[i].subscribe(props[i]);
        }
        else {
            component[i] = props[i];
        }
    }

    fixture.detectChanges();

    return {
        ...getQueriesForElement(document.body)
    }
}

