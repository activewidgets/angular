import {resolve} from 'path';
import markdown from 'rollup-plugin-md';


let html = () => ({
    name: 'html',
    transformIndexHtml: {enforce: 'pre', transform: (html, {path}) => {
        return /\/[\w-]+\/index\.html$/.test(path) ? html.replace('</body>', `
            <script type="module"> import "@angular/compiler"; import "./src/main.ts"; import "./src/styles.css"; </script>
            </body>
        `) : html;
    }}
});


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
        markdown(),
        html()
    ],
    resolve: {
        alias: {
            '@activewidgets/angular': resolve('./index.js')
        }    
    }
}