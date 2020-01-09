import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';

import Alert from './alert-view.svelte';

export default {
    title: 'Alert',
    decorators: [withKnobs]
};

const styles = {
    Primary: 'primary',
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
};

export const Default = () => ({
    Component: Alert,
    props: {
        style: select('Alert style (style)', styles, 'primary'),
        showClose: boolean('Show close icon (showClose)', false),
        animation: boolean('Fade out animation (animation)', false),
        duration: number('Fade out duration (duration)', 150)
    }
});

