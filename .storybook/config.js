import { configure, addParameters } from '@storybook/svelte';

import '../src/main.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
