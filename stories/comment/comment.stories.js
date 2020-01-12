import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import Comment from './comment-view.svelte';

export default {
    title: 'Comment',
    decorators: [withKnobs]
};

export const Default = () => ({
    Component: Comment,
    props: {
        primary: boolean("Primary", false)
    }
});

