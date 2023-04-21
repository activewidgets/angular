
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import fs from 'fs';

let rootpkg = JSON.parse(read('./package.json'));


let globals = {
    '@angular/core': 'ng.core',
    '@activewidgets/frameworks/angular': 'ActiveWidgets.Frameworks.Angular',
    '@activewidgets/datagrid/js': 'ActiveWidgets.Components'
};


let banner = `/**
 * ${rootpkg.name} ${rootpkg.version}
 * Copyright (C) 2023 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this package.
 */
`;


function keepBanner(node, comment){
    if (comment.type == "comment2") {
        return /\(C\) 2023 ActiveWidgets/.test(comment.value);
    }
}


function read(filename){
    return String(fs.readFileSync(filename, {encoding:'utf8'}));
}


export default {
    input: 'metadata.js',
    output: [
        {file: 'dist/ax-angular.umd.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.Angular', extend: true, banner, globals},
        {file: 'dist/ax-angular.esm.js', format: 'esm', sourcemap: true, banner}
    ],
    external: [
        '@angular/core',
        '@activewidgets/frameworks/angular',
        '@activewidgets/datagrid/js'
    ],
    plugins: [
        postcss(),
        resolve(),
        terser({
            output: {comments: keepBanner}
        })
    ]
};