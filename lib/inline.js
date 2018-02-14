
let fs = require('fs'),
    items = require('@activewidgets/grid'),
    builder = require('@activewidgets/frameworks/lib/angular/inline.js'),
    templates = builder(items);

let source = fs.readFileSync('index.js', 'utf8');
source = source.replace('templates = null', 'templates = ' + JSON.stringify(templates));
fs.writeFileSync('dist/index.js', source, 'utf8');
