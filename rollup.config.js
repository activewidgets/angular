
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import {terser} from 'rollup-plugin-terser';
import rootpkg from './package.json';

let globals = {
    '@angular/core': 'ng.core',
    '@activewidgets/frameworks/angular': 'ActiveWidgets.Frameworks.Angular',
    '@activewidgets/datagrid/js': 'ActiveWidgets.Components'
};


let banner = `/**
 * ${rootpkg.name} ${rootpkg.version}
 * Copyright (C) 2022 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this package.
 */
`;


function keepBanner(node, comment){
    if (comment.type == "comment2") {
        return /\(C\) 2022 ActiveWidgets/.test(comment.value);
    }
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
        sourcemaps(),
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