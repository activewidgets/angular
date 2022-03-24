let fs = require('fs'),
    adapter = require('@activewidgets/frameworks/angular'),
    universal = require('@activewidgets/datagrid/js');
    
import('@angular/core').then(core => {
    
let items1 = adapter(core),
    {Datagrid, Row, Cells} = items1.build(universal),
    items = Object.assign({}, items1, {Datagrid, Row, Cells});
    
//import fs from 'fs';
//import * as items from './index.js';
//import * as core from '@angular/core';

const annotations = '__annotations__',
      minVersion = '"12.0.0"',
      version = '"13.3.0"';

let source = '',
    types = new Map(),
    imports = [];

for (let i in core){
    types.set(core[i], 'core.' + i);
}

for (let i in items){
    imports.push(i);
    types.set(items[i], i);
}

function getName(obj){
    return types.get(obj);
}

function getMeta(type){
    return (items[type] && items[type][annotations] && items[type][annotations][0]) || {};
}

let modules = imports.filter(n => getMeta(n).ngMetadataName == 'NgModule'),
    components = imports.filter(n => getMeta(n).ngMetadataName == 'Component'),
    directives = imports.filter(n => getMeta(n).ngMetadataName == 'Directive');

let inOut = (n) => `"${n}":"${n}"`,
    dependencies = ({type}) => `{token: ${getName(type)}}`;

    
function usedDeps(type){

    let meta = getMeta(type),
        selector = JSON.stringify(meta.selector),
        inputs = JSON.stringify(meta.inputs || []),
        outputs = JSON.stringify(meta.outputs || []);

    return `{type: ${type}, selector: ${selector}, inputs: ${inputs}, outputs: ${outputs}}`;
}


function getViewQueries(type){

    let queries = [],
        props = items[type].__prop__metadata__ || {};

    Object.keys(props).map(name => {
        if (props[name][0].isViewQuery === true){
            queries.push(`{propertyName: "${name}", predicate: ${getName(props[name][0].selector)}, descendants: true}`);
        }
    });

    return queries;
}


function getContentQueries(type){

    let queries = [],
        props = items[type].__prop__metadata__ || {};

    Object.keys(props).map(name => {
        if (props[name][0].isViewQuery === false){
            queries.push(`{propertyName: "${name}", predicate: ${getName(props[name][0].selector)}}`);
        }
    });

    return queries;
}


source += `
import * as core from '@angular/core';
import {${imports}} from './index.js';
`;


directives.forEach(type => {

    let meta = getMeta(type),
        selector = JSON.stringify(meta.selector),
        inputs = (meta.inputs || []).map(inOut),
        outputs = (meta.outputs || []).map(n => `"${n.replace(':', '":"')}"`),
        ctorParameters = items[type].ctorParameters,
        deps = ctorParameters ? ctorParameters().map(dependencies) : [];

    source += `
    delete ${type}.ɵfac;
    delete ${type}.ɵdir;

    ${type}.ɵfac = core.ɵɵngDeclareFactory({
        type: ${type}, 
        deps: [${deps}], 
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core, 
        target: core.ɵɵFactoryTarget.Directive 
    });

    ${type}.ɵdir = core.ɵɵngDeclareDirective({
        type: ${type}, 
        selector: ${selector}, 
        inputs: {${inputs}}, 
        outputs: {${outputs}}, 
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core, 
        isInline: true 
    });
    `;
});


components.forEach(type => {

    let meta = getMeta(type),
        selector = JSON.stringify(meta.selector),
        inputs = (meta.inputs || []).map(inOut),
        outputs = (meta.outputs || []).map(n => `"${n.replace(':', '":"')}"`),
        template = meta.template,
        changeDetection = meta.changeDetection === 0 ? 'core.ChangeDetectionStrategy.OnPush' : 'core.ChangeDetectionStrategy.Default',
        ctorParameters = items[type].ctorParameters,
        deps = ctorParameters ? ctorParameters().map(dependencies) : [],
        usedDirectives = directives.map(usedDeps),
        viewQueries = getViewQueries(type),
        queries = getContentQueries(type);

    source += `
    delete ${type}.ɵfac;
    delete ${type}.ɵcmp;

    ${type}.ɵfac = core.ɵɵngDeclareFactory({ 
        type: ${type}, 
        deps: [${deps}], 
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core, 
        target: core.ɵɵFactoryTarget.Component 
    });

    ${type}.ɵcmp = core.ɵɵngDeclareComponent({
        type: ${type}, 
        selector: ${selector}, 
        inputs: {${inputs}}, 
        outputs: {${outputs}}, 
        template: \`${template}\`,
        directives: [${usedDirectives}],
        queries: [${queries}],
        viewQueries: [${viewQueries}],
        changeDetection: ${changeDetection},
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core, 
        isInline: true 
    });
    `;
});


modules.forEach(type => {

    let meta = getMeta(type),
        exps = meta.exports.map(getName),
        declarations = meta.declarations.map(getName);

    source += `
    delete ${type}.ɵfac;
    delete ${type}.ɵmod;
    delete ${type}.ɵinj;

    ${type}.ɵfac = core.ɵɵngDeclareFactory({
        type: ${type}, 
        deps: [], 
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core, 
        target: core.ɵɵFactoryTarget.NgModule
    });

    ${type}.ɵmod = core.ɵɵngDeclareNgModule({
        type: ${type}, 
        declarations: [${declarations}], 
        exports: [${exps}],
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core
    });

    ${type}.ɵinj = core.ɵɵngDeclareInjector({
        type: ${type},
        imports: [[]],
        minVersion: ${minVersion}, 
        version: ${version}, 
        ngImport: core 
    });
    `;
});


source += `
export {${imports}};
`;

fs.writeFileSync('metadata.js', source, 'utf8');

// -------------------------------------------------------------------

source = `
import * as core from '@angular/core';
`;


directives.forEach(type => {

    let meta = getMeta(type),
        selector = JSON.stringify(meta.selector),
        inputs = (meta.inputs || []).map(inOut);

    let properties = (meta.inputs || []).map(n => `${n}: any;`).join(' ');

    source += `
    export declare class ${type} {
        constructor();
        ${properties}
        static ɵfac: core.ɵɵFactoryDeclaration<${type}, never>;
        static ɵdir: core.ɵɵDirectiveDeclaration<${type}, ${selector}, never, {${inputs}}, {}, never>;
    }
    `;
});

components.forEach(type => {

    let meta = getMeta(type),
        selector = JSON.stringify(meta.selector),
        inputs = (meta.inputs || []).map(inOut),
        outputs = (meta.outputs || []).map(n => `"${n.replace(':', '":"')}"`);

    let properties = (meta.inputs || []).map(n => `${n}: any;`).join(' '),
        events = (meta.outputs || []).map(n => `${n.split(':')[0]}: core.EventEmitter<any>;`).join(' ');

    source += `
    export declare class ${type} {
        constructor();
        ${properties}
        ${events}
        static ɵfac: core.ɵɵFactoryDeclaration<${type}, never>;
        static ɵcmp: core.ɵɵComponentDeclaration<${type}, ${selector}, never, {${inputs}}, {${outputs}}, never, never>;
    }
    `;
});

modules.forEach(type => {

    let meta = getMeta(type),
        exps = meta.exports.map(getName).map(n => `typeof ${n}`),
        declarations = meta.declarations.map(getName).map(n => `typeof ${n}`);

    source += `
    export declare class ${type} {
        static ɵfac: core.ɵɵFactoryDeclaration<${type}, never>;
        static ɵmod: core.ɵɵNgModuleDeclaration<${type}, [${declarations}], never, [${exps}]>;
        static ɵinj: core.ɵɵInjectorDeclaration<${type}>;
    }
    `;
});


fs.writeFileSync('index.d.ts', source, 'utf8');

});