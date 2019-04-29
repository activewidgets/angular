
import { configure } from '@storybook/angular';
import '../css';

function loadStories() {
    require('./demo.ts');
    require('./e2e.ts');
}

configure(loadStories, module);