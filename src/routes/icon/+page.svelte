<script lang="ts">
	import { Icon, Tabset, Tab, TabContent } from '#lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let icon = 'heart';
	let ratio = 2;

	let code = `<Icon icon="heart" />
<Icon icon="check" label="Success" />`;
	let codeRatio = `<Icon icon="heart" />
<Icon icon="heart" ratio={2} />
<Icon icon="heart" ratio={3} />`;
	let codeVariants = `<Icon icon="github" variant="link" href="https://github.com" label="GitHub" />
<Icon icon="github" variant="button" href="https://github.com" label="GitHub" />
<Icon icon="play-circle" variant="overlay" ratio={2} label="Play" />`;
	let codeDynamic = `<script lang="ts">
    import { Icon } from 'svelte-uikit-components';
    let icon = 'heart';
    let ratio = 2;
<\/script>

<select bind:value={icon} aria-label="Icon">
    <option value="heart">Heart</option>
    <option value="star">Star</option>
    <option value="check">Check</option>
</select>
<input type="range" min="1" max="4" step="0.5" bind:value={ratio} aria-label="Icon size" />
<Icon {icon} {ratio} label={icon} />`;

	let options: IShowcaseTableData[] = [
		{ name: 'icon', description: 'UIkit icon name, including custom registered icons.', type: 'string', default: 'Required' },
		{ name: 'ratio', description: 'Scales the icon by this factor.', type: 'number', default: '1' },
		{ name: 'variant', description: 'UIkit icon style.', type: "'default' | 'link' | 'button' | 'overlay'", default: 'default' },
		{ name: 'href', description: 'Renders a link instead of a span when provided.', type: 'string | undefined', default: 'undefined' },
		{
			name: 'label',
			description: 'Accessible name. Unlabelled spans are decorative; always label icon-only links.',
			type: 'string | undefined',
			default: 'undefined',
		},
		{ name: 'class', description: 'Additional CSS classes.', type: 'string', default: '' },
	];
	let events: IShowcaseTableData[] = [
		{ name: 'click', description: 'Forwards the native click event. Use href for interactive icons.', type: 'PointerEvent', default: '-' },
	];
</script>

<h1>Icon</h1>
<p>Display UIkit icons with optional sizing, styling and links. Icons inherit the surrounding text color.</p>

<h3>Default and accessible icons</h3>
<p>Decorative icons are hidden from screen readers. Set a label when the icon conveys meaning.</p>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="icon-default-preview" active={true}>Preview</Tab>
		<Tab ident="icon-default-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="icon-default-preview">
			<Icon icon="heart" class="uk-margin-small-right" />
			<Icon icon="check" label="Success" />
		</TabContent>
		<TabContent tabIdent="icon-default-code"><HighlightSvelte {code} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Ratio</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="icon-ratio-preview" active={true}>Preview</Tab>
		<Tab ident="icon-ratio-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="icon-ratio-preview">
			<Icon icon="heart" class="uk-margin-small-right" />
			<Icon icon="heart" ratio={2} class="uk-margin-small-right" />
			<Icon icon="heart" ratio={3} />
		</TabContent>
		<TabContent tabIdent="icon-ratio-code"><HighlightSvelte code={codeRatio} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Variants</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="icon-variants-preview" active={true}>Preview</Tab>
		<Tab ident="icon-variants-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="icon-variants-preview">
			<Icon icon="github" variant="link" href="https://github.com" label="GitHub" class="uk-margin-small-right" />
			<Icon icon="github" variant="button" href="https://github.com" label="GitHub" class="uk-margin-small-right" />
			<Icon icon="play-circle" variant="overlay" ratio={2} label="Play" />
		</TabContent>
		<TabContent tabIdent="icon-variants-code"><HighlightSvelte code={codeVariants} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Dynamic icon and size</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="icon-dynamic-preview" active={true}>Preview</Tab>
		<Tab ident="icon-dynamic-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="icon-dynamic-preview">
			<div class="uk-margin">
				<label for="icon-name">Icon</label>
				<select id="icon-name" class="uk-select uk-form-width-small" bind:value={icon}>
					<option value="heart">Heart</option>
					<option value="star">Star</option>
					<option value="check">Check</option>
				</select>
			</div>
			<div class="uk-margin">
				<label for="icon-ratio">Size: {ratio}</label>
				<input id="icon-ratio" class="uk-range" type="range" min="1" max="4" step="0.5" bind:value={ratio} />
			</div>
			<Icon {icon} {ratio} label={icon} />
		</TabContent>
		<TabContent tabIdent="icon-dynamic-code"><HighlightSvelte code={codeDynamic} /></TabContent>
	</svelte:fragment>
</Tabset>

<ShowcaseOptEvents {options} {events} />
