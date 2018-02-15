
import { configure } from '@storybook/angular';

function loadStories() {
    require('./stories.ts');
}

configure(loadStories, module);