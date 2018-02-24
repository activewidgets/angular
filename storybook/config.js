
import { configure } from '@storybook/angular';

function loadStories() {
    require('./demo.ts');
    require('./e2e.ts');
}

configure(loadStories, module);