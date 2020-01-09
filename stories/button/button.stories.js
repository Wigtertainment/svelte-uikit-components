import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/button/button.svelte';
import ButtonView from "./button-view.svelte";

export default {
    title: 'Button',
    decorators: [withKnobs]
};

const styles = {
    'Default button (primary)': 'default',
    'Primary button (primary)': 'primary',
    'Secondary button (secondary)': 'secondary',
    'Danger button (danger)': 'danger',
    'Text button (ghost)': 'text',
    'Link button (ghost)': 'link'
};

const sizes = {
    Small: 'small',
    Large: 'large'
};

const width = {
    default: 'default',
    full: 'full'
}

export const Default = () => ({
    Component: ButtonView,
    props: {
        text: 'Hello Button',
        style: select('Button style (style)', styles, 'default'),
        size: select('Button size (size)', sizes, 'default'),
        width: select('Button width (width)', width, 'default'),
    },
    on: { click: action('clicked') },
});