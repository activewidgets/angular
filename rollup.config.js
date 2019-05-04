
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    '@angular/core': 'ng.core',
    '@activewidgets/frameworks/angular': 'AX.frameworks.angular',
    '@activewidgets/grid': 'AX.components'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-angular.js', format: 'umd', sourcemap: true, name: 'AX.Angular', extend: true, globals},
        {file: 'dist/ax-angular.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        '@angular/core',
        '@activewidgets/frameworks/angular',
        '@activewidgets/grid'
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