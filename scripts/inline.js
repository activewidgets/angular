
let fs = require('fs'),
    items = require('@activewidgets/grid'),
    builder = require('@activewidgets/frameworks/scripts/angular/inline.js'),
    templates = builder(items);

let source = fs.readFileSync('index.js', 'utf8');

source = source.replace('templates = null', 'templates = ' + JSON.stringify(templates));

if (!fs.existsSync('dist')){
    fs.mkdirSync('dist');
}

fs.writeFileSync('dist/index.js', source, 'utf8');
