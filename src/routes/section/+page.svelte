<script lang="ts">
	import { Section, Tabset, Tab, TabContent } from '$lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import type { IShowcaseTableData } from '../shared/types.js';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

	let codeStyle = `
<Section>
	<h3>Section Style default</h3>
	<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
	</div>
</Section>
<Section style="muted">
	Section Content...
</Section>
<Section style="primary">
	Section Content...
</Section>
<Section style="secondary">
	Section Content...
</Section>
    `;

	let codeSize = `
<Section size="xsmall" style="muted">
	<h3>Section Style default</h3>
	<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
	</div>
</Section>
<Section size="small" style="primary">
	Section Content...
</Section>
<Section size="large" style="muted">
	Section Content...
</Section>
<Section size="xlarge" style="primary">
	Section Content...
</Section>
    `;

	let codePreserveColor = `
<Section style="primary" preserveColor={true}>
	<div class="uk-panel uk-light uk-margin-medium">
		<h3>Section Primary with cards</h3>
	</div>
	<div class="uk-grid-match uk-child-width-expand@m" uk-grid>
		<div>
			<div class="uk-card uk-card-default uk-card-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
		</div>
		<div>
			<div class="uk-card uk-card-default uk-card-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
		</div>
	</div>
</Section>
	`;

	let codeRemovePadding = `
<Section style="muted" removePadding={true}>
	<h3>Section Style default</h3>
	<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
		</div>
	</div>
</Section>
	`;

	let options: IShowcaseTableData[] = [
		{
			name: 'style',
			description: '-',
			type: `'default' | 'muted' | 'primary' | 'secondary'`,
			default: 'default',
		},
		{
			name: 'size',
			description: '-',
			type: `'xsmall' | 'small' | 'large' | 'xlarge'`,
			default: 'small',
		},
		{
			name: 'preserveColor',
			description: '-',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'removePadding',
			description: '-',
			type: 'boolean',
			default: 'false',
		},
		{
			name: 'overlap',
			description: '',
			type: 'boolean',
			default: 'false',
		},
	];

	let events: IShowcaseTableData[] = [];
</script>

<h1>Section</h1>
<h3>Style</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Section>
				<h3>Section Style default</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
			<Section style="muted">
				<h3>Section Style muted</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
			<Section style="primary">
				<h3>Section Style primary</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
			<Section style="secondary">
				<h3>Section Style secondary</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeStyle} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Size</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Section size="xsmall" style="muted">
				<h3>Section size xsamll</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
			<Section size="small" style="primary">
				<h3>Section size small</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
			<Section size="large" style="muted">
				<h3>Section size large</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
			<Section size="xlarge" style="primary">
				<h3>Section size xlarge</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeSize} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Preserve Color</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Section style="primary" preserveColor={true}>
				<div class="uk-panel uk-light uk-margin-medium">
					<h3>Section Preserve Color Primary with cards</h3>
				</div>
				<div class="uk-grid-match uk-child-width-expand@m" uk-grid>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</div>
					</div>
				</div>
			</Section>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codePreserveColor} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Remove Padding</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Section style="muted" removePadding={true}>
				<h3>Section Remove Padding</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeRemovePadding} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<h3>Overlap</h3>
<div>
	<p>
		Some UIkit themes use richer styles, including textured backgrounds and borders. In this case, you can add the .uk-section-overlap class, to
		apply a border image and a negative offset to the following section. Note that this only works in styles that implement the feature, if there
		are subsequent sections.
	</p>
</div>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={'pre'} active={true}>Preview</Tab>
		<Tab ident={'code'}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Section style="muted" overlap={true}>
				<h3>Section Overlap</h3>
				<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
					</div>
				</div>
			</Section>
		</TabContent>
		<TabContent tabIdent="code">
			<HighlightSvelte code={codeRemovePadding} />
		</TabContent>
	</svelte:fragment>
</Tabset>

<ShowcaseOptEvents {options} {events} />
