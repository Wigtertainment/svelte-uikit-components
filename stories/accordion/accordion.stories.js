import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import AccordionView from './accordion-view.svelte';

export default {
    title: 'Accordion',
    decorators: [withKnobs]
};

export const Default = () => ({
    Component: AccordionView,
    props: {
        collapsible: boolean('All items collapsible (collapsible)', false),
        multiple: boolean('Multiple open items (multiple)', false)
    },
    on: {
        beforeshow: action("beforeshow")
    }
});