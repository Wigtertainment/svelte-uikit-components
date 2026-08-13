<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import { Button, Dropbar, Tab, TabContent, Tabset } from '$lib/index.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';
	import type { IShowcaseTableData } from '../shared/types.js';

	const usageCode = `
<script>
	import { Button, Dropbar } from 'svelte-uikit-components';
<\/script>

<Dropbar mode="click">
	<Button slot="toggle">Open dropbar</Button>
	<p>Dropbar content</p>
</Dropbar>
`;

	const directionCode = `
<Dropbar direction="left" mode="click">
	<Button slot="toggle">Open from left</Button>
	<p>Dropbar content</p>
</Dropbar>
`;

	const animationCode = `
<Dropbar
	mode="click"
	animation="reveal-top"
	animateOut={true}
	duration={500}
>
	<Button slot="toggle">Animated dropbar</Button>
	<p>Animated content</p>
</Dropbar>
`;

	const largeCode = `
<Dropbar large={true} mode="click">
	<Button slot="toggle">Large dropbar</Button>
	<p>Dropbar with larger padding</p>
</Dropbar>
`;

	const options: IShowcaseTableData[] = [
		{
			name: 'direction',
			description: 'Visual direction of the dropbar and source for default position/stretch.',
			type: "'top' | 'bottom' | 'left' | 'right'",
			default: 'top',
		},
		{ name: 'large', description: 'Applies the large padding modifier.', type: 'boolean', default: 'false' },
		{ name: 'mode', description: 'How the dropbar is triggered.', type: "'click' | 'hover' | 'click, hover'", default: 'click, hover' },
		{
			name: 'position',
			description: 'Overrides the position derived from direction.',
			type: 'DropbarPosition | undefined',
			default: 'undefined',
		},
		{
			name: 'stretch',
			description: 'Overrides the stretch axis derived from direction.',
			type: "boolean | 'x' | 'y' | undefined",
			default: 'undefined',
		},
		{
			name: 'toggleSelector',
			description: 'CSS selector for the toggle element. Defaults to the preceding element.',
			type: 'string',
			default: '- *',
		},
		{ name: 'target', description: 'Element the dropbar is positioned against.', type: 'boolean | string', default: 'false' },
		{ name: 'boundary', description: 'Boundary selector used for flipping, shifting and stretching.', type: 'string | false', default: 'false' },
		{ name: 'animation', description: 'UIkit or Drop-specific animation.', type: 'DropbarAnimation', default: 'uk-animation-fade' },
		{ name: 'animateOut', description: 'Animates the dropbar while closing.', type: 'boolean', default: 'false' },
		{ name: 'duration', description: 'Animation duration in milliseconds.', type: 'number', default: '200' },
		{ name: 'delayShow', description: 'Delay before showing in hover mode.', type: 'number', default: '0' },
		{ name: 'delayHide', description: 'Delay before hiding in hover mode.', type: 'number', default: '800' },
		{ name: 'offset', description: 'Distance from the toggle in pixels.', type: 'number', default: '0' },
		{ name: 'flip', description: 'Flips the dropbar if it overflows its boundary.', type: 'boolean', default: 'true' },
		{ name: 'shift', description: 'Shifts the dropbar if it overflows its boundary.', type: 'boolean', default: 'true' },
		{ name: 'autoUpdate', description: 'Repositions the dropbar while scrolling.', type: 'boolean', default: 'true' },
		{ name: 'inset', description: 'Positions the dropbar inside its target.', type: 'boolean', default: 'false' },
		{ name: 'bgScroll', description: 'Allows background scrolling while open.', type: 'boolean', default: 'true' },
		{ name: 'closeOnScroll', description: 'Closes when a parent scroll container scrolls.', type: 'boolean', default: 'false' },
		{ name: 'container', description: 'Container selector to append the dropbar to.', type: 'boolean | string', default: 'false' },
		{ name: 'className', description: 'Additional classes for the dropbar element.', type: 'string', default: "''" },
	];

	const events: IShowcaseTableData[] = [
		{ name: 'on:toggle', description: 'Fires before the dropbar is toggled.' },
		{ name: 'on:beforeshow', description: 'Fires before the dropbar is shown and can be cancelled.' },
		{ name: 'on:show', description: 'Fires after showing starts.' },
		{ name: 'on:shown', description: 'Fires after the show animation completes.' },
		{ name: 'on:beforehide', description: 'Fires before the dropbar is hidden and can be cancelled.' },
		{ name: 'on:hide', description: 'Fires before the dropbar is hidden.' },
		{ name: 'on:hidden', description: 'Fires after the dropbar is hidden.' },
		{ name: 'on:stack', description: 'Fires when UIkit applies its stacked layout.' },
	];
</script>

<h1>Dropbar</h1>

<h3>Usage</h3>
<div class="uk-overflow-auto uk-height-medium">
	<Tabset>
		<svelte:fragment slot="tabs">
			<Tab ident="preview" active={true}>Preview</Tab>
			<Tab ident="code">Code</Tab>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<TabContent tabIdent="preview">
				<div class="uk-inline">
					<Dropbar mode="click">
						<Button slot="toggle">Open dropbar</Button>
						<p>Dropbar content stretching across the available width.</p>
					</Dropbar>
				</div>
			</TabContent>
			<TabContent tabIdent="code"><HighlightSvelte code={usageCode} /></TabContent>
		</svelte:fragment>
	</Tabset>
</div>

<h3>Direction</h3>
<div class="uk-overflow-auto uk-height-medium">
	<Tabset>
		<svelte:fragment slot="tabs">
			<Tab ident="preview" active={true}>Preview</Tab>
			<Tab ident="code">Code</Tab>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<TabContent tabIdent="preview">
				<div class="uk-inline uk-margin-left">
					<Dropbar direction="left" mode="click">
						<Button slot="toggle">Open from left</Button>
						<p>Left dropbar content.</p>
					</Dropbar>
				</div>
			</TabContent>
			<TabContent tabIdent="code"><HighlightSvelte code={directionCode} /></TabContent>
		</svelte:fragment>
	</Tabset>
</div>

<h3>Animation</h3>
<div class="uk-overflow-auto uk-height-medium">
	<Tabset>
		<svelte:fragment slot="tabs">
			<Tab ident="preview" active={true}>Preview</Tab>
			<Tab ident="code">Code</Tab>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<TabContent tabIdent="preview">
				<div class="uk-inline">
					<Dropbar mode="click" animation="reveal-top" animateOut={true} duration={500}>
						<Button slot="toggle">Animated dropbar</Button>
						<p>Animated content.</p>
					</Dropbar>
				</div>
			</TabContent>
			<TabContent tabIdent="code"><HighlightSvelte code={animationCode} /></TabContent>
		</svelte:fragment>
	</Tabset>
</div>

<h3>Large</h3>
<div class="uk-overflow-auto uk-height-large">
	<Tabset>
		<svelte:fragment slot="tabs">
			<Tab ident="preview" active={true}>Preview</Tab>
			<Tab ident="code">Code</Tab>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<TabContent tabIdent="preview">
				<div class="uk-inline">
					<Dropbar large={true} mode="click">
						<Button slot="toggle">Large dropbar</Button>
						<p>Dropbar with larger padding.</p>
					</Dropbar>
				</div>
			</TabContent>
			<TabContent tabIdent="code"><HighlightSvelte code={largeCode} /></TabContent>
		</svelte:fragment>
	</Tabset>
</div>

<p>The component exposes <code>show()</code> and <code>hide(delay)</code> methods through <code>bind:this</code>.</p>

<ShowcaseOptEvents {options} {events} />
