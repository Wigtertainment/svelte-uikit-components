import type { Meta, StoryObj } from '@storybook/svelte';
import Button from "$lib/components/button/button.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		style: {
			control: { type: 'select' },
			options: ['default', 'primary', 'secondary', 'danger', 'text', 'link'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'large'],
		},
		width: {
			control: { type: 'select' },
			options: ['default', 'full'],
		},
	},
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		style: 'primary',
		label: 'Button',
	},
};

export const Secondary: Story = {
	args: {
		style: 'secondary',
		label: 'Button',
	},
};

export const Large: Story = {	
	args: {
		size: 'large',
		label: 'Button',
	},
};

export const Full: Story = {
	args: {
		width: 'full',
		label: 'Button',
	},
};
