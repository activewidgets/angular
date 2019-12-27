

import {getQueriesForElement} from '@testing-library/dom';
import {TestBed} from '@angular/core/testing';
import {Module} from '@activewidgets/components';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

    TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting()
    );


export function render(Component, props){

    TestBed.configureTestingModule({
        imports: [Module]
    });

    let fixture = TestBed.createComponent(Component),
        component = fixture.componentInstance;

    for(let i in props){
        component[i] = props[i];
    }

    fixture.detectChanges();

    return {
        ...getQueriesForElement(document.body)
    }
}

