import {resolve} from 'path';
import markdown from 'rollup-plugin-md';

export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('examples/index.html'),
                columns: resolve('examples/columns/index.html'),
                demo: resolve('examples/demo/index.html'),
                events: resolve('examples/events/index.html'),
                hello: resolve('examples/hello-world/index.html')
            }    
        }
    },
    plugins: [
        markdown()
    ],
    resolve: {
        alias: {
            '@activewidgets/angular/css': resolve('./css/esm.js'),
            '@activewidgets/angular': resolve('./index.js')
        }    
    }
}