import type { Meta, StoryObj } from '@storybook/svelte';

import Accordion from './accordion.svelte';
import AccordionItem from '../../lib/components/accordion/accordion-item.svelte';

const meta = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Example/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    subcomponents: { AccordionItem },
    argTypes: {
        collapsible: {
            type: "boolean"
        },
        multiple: {
            type: "boolean"
        }
    }
} satisfies Meta<Accordion>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Collapsible: Story = {
    args: {
        collapsible: true,
    },
};

export const Multiple: Story = {
    args: {
        collapsible: false,
    },
};