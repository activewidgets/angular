
let fs = require('fs'),
    items = require('@activewidgets/grid'),
    builder = require('@activewidgets/frameworks/scripts/angular/source.js'),
    source = builder(items);

if (!fs.existsSync('tmp')){
    fs.mkdirSync('tmp');
}

fs.writeFileSync('tmp/index.js', source, 'utf8');

