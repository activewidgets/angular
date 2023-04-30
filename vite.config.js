import {resolve} from 'path';
import markdown from 'rollup-plugin-md';
import examples from '@activewidgets/examples/plugin';
import puppeteer from '@activewidgets/puppeteer/plugin';

export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true
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