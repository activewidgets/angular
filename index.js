"use strict";
Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@angular/core'),
    common = require('@angular/common'),
    frameworks = require('@activewidgets/frameworks'),
    items = require('@activewidgets/grid'),
    exported = [frameworks.Slot],
    declarations = [],
    templates = null;

var builder = frameworks.angular(core, declarations, items.path, templates);

exports.Base = frameworks.Base;
exports.Slot = frameworks.Slot;
exports.Tpl = frameworks.Tpl;
exports.Ref = frameworks.Ref;
exports.ForOf = frameworks.ForOf;

function toPascalCase(s){
    return s.replace(/^.|-./g, (m) => m.slice(-1).toUpperCase());
}


function buildComponent(options){

    for(var i in options.components){
        buildComponent(options.components[i]);
    }

    var name = toPascalCase(options.name),
        component = builder(options);

    exports[name] = component;
    return component;
}


for(var i in items){
    if (typeof items[i] == 'object'){
        exported.push(buildComponent(items[i]));
    }
}



function AxModule(){};

AxModule.annotations = [new core.NgModule({
    imports: [common.CommonModule],
    exports: exported,
    declarations: declarations
})];

exports.AxModule = AxModule;
exports.default = AxModule;