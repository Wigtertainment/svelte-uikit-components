import { withKnobs, date, text } from '@storybook/addon-knobs';

import Countdown from './countdown-view.svelte';

export default {
    title: 'Countdown',
    decorators: [withKnobs]
};

const defaultDate = new Date('2021');
function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValuSe)
    return new Date(stringTimestamp)
}

export const Default = () => ({
    Component: Countdown,
    props: {
        date: myDateKnob("Date (date)", defaultDate),
        separator: text("Separator (separator)", ':'),
        daysLabel: text("Days label (daysLabel)", 'Days'),
        hoursLabel: text("Hours label (hoursLabel)", 'Hours'),
        minutesLabel: text("Minutes label (minutesLabel)", 'Minutes'),
        secondsLabel: text("Seconds label (secondsLabel)", 'Seconds')
    }
});

