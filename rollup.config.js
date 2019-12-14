
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    '@angular/core': 'ng.core',
    '@activewidgets/frameworks/angular': 'ActiveWidgets.frameworks.angular',
    '@activewidgets/datagrid/js': 'ActiveWidgets.components',
    '@activewidgets/datagrid/metadata': 'ActiveWidgets.metadata'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-angular.umd.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.Angular', extend: true, globals},
        {file: 'dist/ax-angular.esm.js', format: 'esm', sourcemap: true}
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
            exclude: 'node_modules/**',
            presets: [["@babel/env", {modules: false}]]
        })
    ]
};