
let fs = require('fs'),
    items = require('@activewidgets/grid'),
    builder = require('@activewidgets/frameworks/scripts/angular/aot.js'),
    source = builder(items);

if (!fs.existsSync('dist')){
    fs.mkdirSync('dist');
}

fs.writeFileSync('dist/index.ts', source, 'utf8');

