import {resolve} from 'path';
import markdown from 'rollup-plugin-md';
import examples from '@activewidgets/examples/plugin';
import puppeteer from '@activewidgets/puppeteer/plugin';

export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    core: ['@angular/core', '@angular/common', '@angular/platform-browser', '@angular/platform-browser-dynamic'],
                    compiler: ['@angular/compiler']
                }
            }
        }
    },
    plugins: [
        puppeteer('../test/visual/*.js'),
        examples(),
        markdown()
    ],
    resolve: {
        alias: {
            '@activewidgets/datagrid': '@activewidgets/datagrid/style-inject',
            '@activewidgets/angular': resolve('./index.js')
        }    
    }
}