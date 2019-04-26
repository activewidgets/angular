
import { configure } from '@storybook/angular';
import '@activewidgets/grid/css/index.css';

function loadStories() {
    require('./demo.ts');
    require('./e2e.ts');
}

configure(loadStories, module);