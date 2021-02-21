
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import rootpkg from './package.json';

let globals = {
    '@angular/core': 'ng.core',
    '@activewidgets/frameworks/angular': 'ActiveWidgets.Frameworks.Angular',
    '@activewidgets/datagrid/js': 'ActiveWidgets.Components',
    '@activewidgets/datagrid/metadata': 'ActiveWidgets.Metadata'
};


let banner = `/**
 * ${rootpkg.name} ${rootpkg.version}
 * Copyright (C) 2020 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this package.
 */
`;


function keepBanner(node, comment){
    if (comment.type == "comment2") {
        return /\(C\) 2020 ActiveWidgets/.test(comment.value);
    }
}


export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-angular.umd.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.Angular', extend: true, banner, globals},
        {file: 'dist/ax-angular.esm.js', format: 'esm', sourcemap: true, banner}
    ],
    external: [
        '@angular/core',
        '@activewidgets/frameworks/angular',
        '@activewidgets/datagrid/js',
        '@activewidgets/datagrid/metadata'
    ],
    plugins: [
        resolve(),
        babel({
            babelrc: false,
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: [["@babel/env", {modules: false}]]
        }),
        terser({
            output: {comments: keepBanner}
        })
    ]
};