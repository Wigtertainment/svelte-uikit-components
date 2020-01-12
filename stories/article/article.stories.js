import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import Article from './article-view.svelte';

export default {
    title: 'Article',
    decorators: [withKnobs]
};

export const Default = () => ({
    Component: Article,
    props: {
    }
});

