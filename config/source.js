
let fs = require('fs'),
    items = require('../'),
    source = '',
    imports = {};


function ref(item){
    for (let i in items){
        if (items[i] === item){
            return i;
        }
    }
}


function param(value, index){

    let name = value.name,
        args = {TemplateRef: '<any>'},
        type = name + (args[name] || '');

    imports[name] = true;

    return ` private arg${index}: ${type}`;
}


function component(name, item, meta){

    let selector = JSON.stringify(meta.selector),
        host = JSON.stringify(meta.host),
        template = JSON.stringify(meta.template),
        inputs = meta.inputs.map(n => `@Input() ${n}: any;`).join(' '),
        outputs = meta.outputs.map(n => `@Output() ${n} = new EventEmitter<any>();`).join(' '),
        params = item.parameters.map(param);

    return `
        @Component({
            selector: ${selector},
            host: ${host},
            template: ${template},
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush
        })
        export class ${name} {
            constructor(${params}){}
            ${inputs}
            ${outputs}
            ngOnInit(){}
            ngOnChanges(){}
            ngAfterViewInit(){}
            ngOnDestroy(){}
        }
    `;
}


function directive(name, item, meta){

    let selector = JSON.stringify(meta.selector),
        inputs = meta.inputs.map(n => `@Input() ${n}: any;`).join(' '),
        params = item.parameters.map(param);

    return `
        @Directive({
            selector: ${selector}
        })
        export class ${name} {
            constructor(${params}){}
            ${inputs}
            ngOnChanges(){}
            ngDoCheck(){}
        }
    `;
}


function module(name, item, meta){

    let exports = meta.exports.map(ref),
        declarations = meta.declarations.map(ref),
        entryComponents = meta.entryComponents.map(ref);

    return `
        @NgModule({
            imports: [],
            exports: [${exports}],
            declarations: [${declarations}],
            entryComponents: [${entryComponents}]
        })
        export class ${name} {}
    `;
}


function expand1(name, item){
    let meta = item.annotations[0];
    switch(meta.ngMetadataName){
        case 'Component': return component(name, item, meta);
        case 'Directive': return directive(name, item, meta);
    }
}


function expand2(name, item){
    let meta = item.annotations[0];
    switch(meta.ngMetadataName){
        case 'NgModule': return module(name, item, meta);
    }
}


for (let i in items){
    if (typeof items[i] == 'function' && items[i].annotations) {
        source += expand1(i, items[i]) || '';
    }
}

for (let i in items){
    if (typeof items[i] == 'function' && items[i].annotations) {
        source += expand2(i, items[i]) || '';
    }
}


let header = `
    import {NgModule, Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ${Object.keys(imports)}} from '@angular/core';
`;

source = header + source;

if (!fs.existsSync('tmp')){
    fs.mkdirSync('tmp');
}

fs.writeFileSync('tmp/public_api.ts', source, 'utf8');

