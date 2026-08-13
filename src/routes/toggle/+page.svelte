<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import { Tab, TabContent, Tabset, Toggle } from '$lib/index.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';
	import type { IShowcaseTableData } from '../shared/types.js';

	const usageCode = `
<script>
	import { Toggle } from 'svelte-uikit-components';
<\/script>

<Toggle target="#toggle-usage" class="uk-button uk-button-default">
	Toggle
</Toggle>
<p id="toggle-usage">What's up?</p>
`;

	const customClassCode = `
<Toggle
	target="#toggle-custom-class"
	cls="uk-card-primary"
	class="uk-button uk-button-default"
>
	Toggle class
</Toggle>

<div id="toggle-custom-class" class="uk-card uk-card-default uk-card-body uk-margin-small">
	Custom class
</div>
`;

	const animationCode = `
<Toggle
	target="#toggle-animation"
	animation="uk-animation-fade"
	duration={300}
	class="uk-button uk-button-default"
>
	Toggle animation
</Toggle>

<div id="toggle-animation" class="uk-card uk-card-default uk-card-body uk-margin-small">
	Animated content
</div>
`;

	const modeCode = `
<Toggle target="#toggle-hover" mode="hover" class="uk-button uk-button-default">
	Hover
</Toggle>
<p id="toggle-hover">Shown while the trigger is hovered or focused.</p>
`;

	const options: IShowcaseTableData[] = [
		{
			name: 'target',
			description: 'CSS selector of the element or elements to toggle.',
			type: 'string | undefined',
			default: 'undefined',
		},
		{
			name: 'mode',
			description: 'How the toggle is triggered.',
			type: "'click' | 'hover' | 'click, hover' | 'media'",
			default: 'click',
		},
		{
			name: 'cls',
			description: 'Class to toggle instead of the hidden attribute.',
			type: 'string | false',
			default: 'false',
		},
		{
			name: 'media',
			description: 'Viewport condition used with media mode.',
			type: 'boolean | number | string',
			default: 'false',
		},
		{
			name: 'animation',
			description: 'UIkit animation class, optionally with a separate out animation.',
			type: 'ToggleAnimation',
			default: 'false',
		},
		{
			name: 'duration',
			description: 'Animation duration in milliseconds.',
			type: 'number',
			default: '200',
		},
		{
			name: 'queued',
			description: 'Toggle multiple targets successively.',
			type: 'boolean',
			default: 'true',
		},
		{
			name: 'label',
			description: 'Button text. If omitted, the default slot is rendered.',
			type: 'string',
			default: "''",
		},
		{
			name: 'disabled',
			description: 'Disables the toggle button.',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'type',
			description: 'Native button type.',
			type: "'button' | 'submit' | 'reset'",
			default: 'button',
		},
		{
			name: 'ariaExpanded',
			description: 'Adds aria-expanded so UIkit can keep the disclosure state synchronized.',
			type: 'boolean | undefined',
			default: 'undefined',
		},
	];

	const events: IShowcaseTableData[] = [
		{ name: 'on:beforeshow', description: 'Fires before a target is shown. Can be cancelled with preventDefault().' },
		{ name: 'on:show', description: 'Fires after a target is shown.' },
		{ name: 'on:shown', description: "Fires after the target's show animation completes." },
		{ name: 'on:beforehide', description: 'Fires before a target is hidden. Can be cancelled with preventDefault().' },
		{ name: 'on:hide', description: "Fires after the target's hide animation starts." },
		{ name: 'on:hidden', description: 'Fires after a target is hidden.' },
		{ name: 'on:click', description: 'Forwards the native button click event.' },
	];
</script>

<h1>Toggle</h1>

<h3>Usage</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="preview" active={true}>Preview</Tab>
		<Tab ident="code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="preview">
			<Toggle target="#toggle-usage" class="uk-button uk-button-default">Toggle</Toggle>
			<p id="toggle-usage">What's up?</p>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={usageCode} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Custom class</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="preview" active={true}>Preview</Tab>
		<Tab ident="code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="preview">
			<Toggle target="#toggle-custom-class" cls="uk-card-primary" class="uk-button uk-button-default">Toggle class</Toggle>
			<div id="toggle-custom-class" class="uk-card uk-card-default uk-card-body uk-margin-small">Custom class</div>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={customClassCode} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Animation</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="preview" active={true}>Preview</Tab>
		<Tab ident="code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="preview">
			<Toggle target="#toggle-animation" animation="uk-animation-fade" duration={300} class="uk-button uk-button-default">
				Toggle animation
			</Toggle>
			<div id="toggle-animation" class="uk-card uk-card-default uk-card-body uk-margin-small">Animated content</div>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={animationCode} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Hover mode</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="preview" active={true}>Preview</Tab>
		<Tab ident="code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="preview">
			<Toggle target="#toggle-hover" mode="hover" class="uk-button uk-button-default">Hover</Toggle>
			<p id="toggle-hover">Shown while the trigger is hovered or focused.</p>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={modeCode} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<p>The component also exposes a <code>toggle()</code> method when accessed through <code>bind:this</code>.</p>

<ShowcaseOptEvents {options} {events} />
