
let fs = require('fs'),
    items = require('@activewidgets/grid'),
    builder = require('@activewidgets/frameworks/lib/angular/aot.js'),
    source = builder(items);

fs.writeFileSync('dist/index.ts', source, 'utf8');

