
let fs = require('fs'),
    items = require('@activewidgets/grid'),
    builder = require('@activewidgets/frameworks/scripts/angular/aot.js'),
    source = builder(items);

if (!fs.existsSync('tmp')){
    fs.mkdirSync('tmp');
}

fs.writeFileSync('tmp/public_api.ts', source, 'utf8');

