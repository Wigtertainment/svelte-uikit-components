<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Alert from "$lib/components/alert/alert.svelte";

	let argTypes = {
		style: {
			control: { type: "select" },
			options: ["success", "primary", "secondary", "danger"],
		},
		showClose: {
			control: { type: "boolean" },
		},
		animation: {
			control: { type: "boolean" },
		},
	};
</script>

<Meta title="Example/Alert" component={Alert} {argTypes} />

<Template let:args>
	<Alert {...args}>This is a Alert!</Alert>
</Template>

<Story name="Primary" args={{ style: "primary" }} />