<script lang="ts">
	import { Button, Modal, Tab, TabContent, Tabset } from '#lib/index.js';
	import { HighlightSvelte } from 'svelte-highlight';
	import { asset } from '$app/paths';
	import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';
	import ShowcaseTable from '../shared/showcase-table.svelte';
	import type { IShowcaseTableData } from '../shared/types.js';

	let isOpen = false;
	let modal: Modal;
	let customOpen = false;
	let centeredOpen = false;
	let containerOpen = false;
	let fullOpen = false;
	let firstOpen = false;
	let secondOpen = false;
	let eventsOpen = false;
	let preventClose = false;
	let lastEvent = 'None';

	function recordEvent(event: CustomEvent<Event>): void {
		lastEvent = event.type;
		if (event.type === 'beforehide' && preventClose) {
			event.preventDefault();
			lastEvent += ' (cancelled)';
		}
	}

	const usageCode = `<script>
    import { Button, Modal } from 'svelte-uikit-components';
    let isOpen = false;
<\/script>

<Button on:click={() => isOpen = true}>Open modal</Button>
<Modal bind:isOpen title="Welcome">
    <p>Close with the close button, Escape or a click on the background.</p>
</Modal>`;
	const methodsCode = `<script lang="ts">
    import { Button, Modal } from 'svelte-uikit-components';
    let modal: Modal;
<\/script>

<Button on:click={() => modal.show()}>Open with show()</Button>
<Button on:click={() => modal.toggle()}>Toggle</Button>
<Modal bind:this={modal} title="Component methods">
    <Button on:click={() => modal.hide()}>Close with hide()</Button>
</Modal>`;
	const customCode = `<script>
    import { Button, Modal } from 'svelte-uikit-components';
    let customOpen = false;
<\/script>

<Button on:click={() => customOpen = true}>Open custom dialog</Button>
<Modal bind:isOpen={customOpen} label="Custom dialog" showClose={false} escClose={false} bgClose={false}>
    <h2 slot="header" class="uk-modal-title">Custom header</h2>
    <p>This dialog closes only through its footer button.</p>
    <button slot="footer" type="button" class="uk-button uk-button-primary uk-modal-close">Done</button>
</Modal>`;
	const variantsCode = `<script>
    import { Button, Modal } from 'svelte-uikit-components';
    let centeredOpen = false;
    let containerOpen = false;
    let fullOpen = false;
<\/script>

<Button on:click={() => centeredOpen = true}>Open centered dialog</Button>
<Button on:click={() => containerOpen = true}>Open wide dialog</Button>
<Button on:click={() => fullOpen = true}>Open fullscreen dialog</Button>
<Modal bind:isOpen={centeredOpen} title="Centered dialog" centered>
    <p>Vertically centered content.</p>
</Modal>
<Modal bind:isOpen={containerOpen} title="Wide dialog" size="container">
    <p>A wider dialog for larger content.</p>
</Modal>
<Modal bind:isOpen={fullOpen} label="Fullscreen dialog" size="full" class="full-modal-example">
    <div class="full-modal-layout uk-grid uk-grid-collapse uk-child-width-1-2@m">
        <div class="uk-background-cover uk-visible@m"
            style="background-image: url('/images/modal-meadow-tree.png');" aria-hidden="true"></div>
        <div class="uk-padding-large uk-flex uk-flex-column uk-flex-center">
            <h2 class="uk-modal-title">Fullscreen dialog</h2>
            <p>A viewport-height split layout with an image and room for your content.</p>
            <p>The full variant reaches the edges of the page and uses a large close button.</p>
            <div><button type="button" class="uk-button uk-button-primary uk-modal-close">Close fullscreen dialog</button></div>
        </div>
    </div>
</Modal>

<style>
    .full-modal-layout { min-height: 100vh; }
    :global(.full-modal-example .uk-modal-body) { padding: 0; }
</style>`;
	const stackCode = `<script>
    import { Button, Modal } from 'svelte-uikit-components';
    let firstOpen = false;
    let secondOpen = false;
<\/script>

<Button on:click={() => firstOpen = true}>Open first dialog</Button>
<Modal bind:isOpen={firstOpen} title="First dialog" stack>
    <Button on:click={() => secondOpen = true}>Open second dialog</Button>
</Modal>
<Modal bind:isOpen={secondOpen} title="Second dialog" stack>
    <p>Close this dialog to return to the first one.</p>
</Modal>`;
	const eventsCode = `<script lang="ts">
    import { Button, Modal } from 'svelte-uikit-components';
    let eventsOpen = false;
    let preventClose = false;
    let lastEvent = 'None';

    function recordEvent(event: CustomEvent<Event>): void {
        lastEvent = event.type;
        if (event.type === 'beforehide' && preventClose) {
            event.preventDefault();
            lastEvent += ' (cancelled)';
        }
    }
<\/script>

<Button on:click={() => eventsOpen = true}>Open event example</Button>
<p aria-live="polite">Last event: {lastEvent}</p>
<Modal bind:isOpen={eventsOpen} title="Lifecycle events"
    on:beforeshow={recordEvent} on:show={recordEvent} on:shown={recordEvent}
    on:beforehide={recordEvent} on:hide={recordEvent} on:hidden={recordEvent}>
    <label><input type="checkbox" bind:checked={preventClose} /> Prevent closing</label>
    <p>Uncheck the box to allow closing again.</p>
</Modal>`;

	const options: IShowcaseTableData[] = [
		{ name: 'id', description: 'Optional ID for targeting the dialog with Toggle.', type: 'string | undefined', default: 'undefined' },
		{ name: 'isOpen', description: 'Bindable open state, synchronized with UIkit.', type: 'boolean', default: 'false' },
		{ name: 'title', description: 'Default header text and accessible name when label is omitted.', type: 'string', default: "''" },
		{
			name: 'label',
			description: 'Overrides the accessible name. Falls back to title, then Dialog.',
			type: 'string | undefined',
			default: 'undefined',
		},
		{ name: 'showClose', description: 'Displays the built-in close button.', type: 'boolean', default: 'true' },
		{ name: 'closeLabel', description: 'Accessible label of the built-in close button.', type: 'string', default: 'Close' },
		{
			name: 'size',
			description: 'Default, wider container or edge-to-edge full variant.',
			type: "'default' | 'container' | 'full'",
			default: 'default',
		},
		{ name: 'centered', description: 'Centers the dialog vertically.', type: 'boolean', default: 'false' },
		{ name: 'escClose', description: 'Allows closing with Escape.', type: 'boolean', default: 'true' },
		{ name: 'bgClose', description: 'Allows closing by clicking the background.', type: 'boolean', default: 'true' },
		{
			name: 'stack',
			description: 'Keeps other dialogs open underneath. Otherwise, opening a modal closes the previous one.',
			type: 'boolean',
			default: 'false',
		},
		{ name: 'class', description: 'Additional classes for the outer modal element.', type: 'string', default: "''" },
	];
	const methods: IShowcaseTableData[] = [
		{ name: 'show()', description: 'Requests opening the dialog.', type: 'Promise<boolean>', default: '-' },
		{ name: 'hide()', description: 'Requests closing the dialog.', type: 'Promise<boolean>', default: '-' },
		{ name: 'toggle()', description: 'Switches the requested open state.', type: 'Promise<boolean>', default: '-' },
	];
	const events: IShowcaseTableData[] = [
		{ name: 'on:beforeshow', description: 'Before opening. Cancel with event.preventDefault().' },
		{ name: 'on:show', description: 'Opening has started.' },
		{ name: 'on:shown', description: 'The opening animation has completed.' },
		{ name: 'on:beforehide', description: 'Before closing. Cancel with event.preventDefault().' },
		{ name: 'on:hide', description: 'Closing has started.' },
		{ name: 'on:hidden', description: 'The closing animation has completed.' },
	];
</script>

<h1>Modal</h1>
<p>Display dialogs with bound state, component methods and optional header and footer content.</p>

<h3>Bound state</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="modal-usage-preview" active={true}>Preview</Tab>
		<Tab ident="modal-usage-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="modal-usage-preview">
			<Button on:click={() => (isOpen = true)}>Open modal</Button>
			<p aria-live="polite">State: {isOpen ? 'Open' : 'Closed'}</p>
			<Modal id="modal-usage" bind:isOpen title="Welcome">
				<p>Close with the close button, Escape or a click on the background.</p>
			</Modal>
		</TabContent>
		<TabContent tabIdent="modal-usage-code"><HighlightSvelte code={usageCode} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Component methods</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="modal-methods-preview" active={true}>Preview</Tab>
		<Tab ident="modal-methods-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="modal-methods-preview">
			<Button on:click={() => modal.show()}>Open with show()</Button>
			<Button on:click={() => modal.toggle()}>Toggle</Button>
			<Modal id="modal-methods" bind:this={modal} title="Component methods">
				<Button on:click={() => modal.hide()}>Close with hide()</Button>
			</Modal>
		</TabContent>
		<TabContent tabIdent="modal-methods-code"><HighlightSvelte code={methodsCode} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Header, footer and close options</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="modal-custom-preview" active={true}>Preview</Tab>
		<Tab ident="modal-custom-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="modal-custom-preview">
			<Button on:click={() => (customOpen = true)}>Open custom dialog</Button>
			<Modal id="modal-custom" bind:isOpen={customOpen} label="Custom dialog" showClose={false} escClose={false} bgClose={false}>
				<h2 slot="header" class="uk-modal-title">Custom header</h2>
				<p>This dialog closes only through its footer button.</p>
				<button slot="footer" type="button" class="uk-button uk-button-primary uk-modal-close">Done</button>
			</Modal>
		</TabContent>
		<TabContent tabIdent="modal-custom-code"><HighlightSvelte code={customCode} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Size and centering</h3>
<p>The full example uses a viewport-height split layout, like UIkit's full modal example.</p>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="modal-variants-preview" active={true}>Preview</Tab>
		<Tab ident="modal-variants-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="modal-variants-preview">
			<Button on:click={() => (centeredOpen = true)}>Open centered dialog</Button>
			<Button on:click={() => (containerOpen = true)}>Open wide dialog</Button>
			<Button on:click={() => (fullOpen = true)}>Open fullscreen dialog</Button>
			<Modal id="modal-centered" bind:isOpen={centeredOpen} title="Centered dialog" centered>
				<p>Vertically centered content.</p>
			</Modal>
			<Modal id="modal-container" bind:isOpen={containerOpen} title="Wide dialog" size="container">
				<p>A wider dialog for larger content.</p>
			</Modal>
			<Modal id="modal-full" bind:isOpen={fullOpen} label="Fullscreen dialog" size="full" class="full-modal-example">
				<div class="full-modal-layout uk-grid uk-grid-collapse uk-child-width-1-2@m">
					<div
						class="uk-background-cover uk-visible@m"
						style={`background-image: url('${asset('images/modal-meadow-tree.png')}');`}
						aria-hidden="true">
					</div>
					<div class="uk-padding-large uk-flex uk-flex-column uk-flex-center">
						<h2 class="uk-modal-title">Fullscreen dialog</h2>
						<p>A viewport-height split layout with an image and room for your content.</p>
						<p>The full variant reaches the edges of the page and uses a large close button.</p>
						<div><button type="button" class="uk-button uk-button-primary uk-modal-close">Close fullscreen dialog</button></div>
					</div>
				</div>
			</Modal>
		</TabContent>
		<TabContent tabIdent="modal-variants-code"><HighlightSvelte code={variantsCode} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Stacked dialogs</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="modal-stack-preview" active={true}>Preview</Tab>
		<Tab ident="modal-stack-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="modal-stack-preview">
			<Button on:click={() => (firstOpen = true)}>Open first dialog</Button>
			<Modal id="modal-first" bind:isOpen={firstOpen} title="First dialog" stack>
				<Button on:click={() => (secondOpen = true)}>Open second dialog</Button>
			</Modal>
			<Modal id="modal-second" bind:isOpen={secondOpen} title="Second dialog" stack>
				<p>Close this dialog to return to the first one.</p>
			</Modal>
		</TabContent>
		<TabContent tabIdent="modal-stack-code"><HighlightSvelte code={stackCode} /></TabContent>
	</svelte:fragment>
</Tabset>

<h3>Lifecycle events and cancellation</h3>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident="modal-events-preview" active={true}>Preview</Tab>
		<Tab ident="modal-events-code">Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="modal-events-preview">
			<Button on:click={() => (eventsOpen = true)}>Open event example</Button>
			<p aria-live="polite">Last event: {lastEvent}</p>
			<Modal
				id="modal-events"
				bind:isOpen={eventsOpen}
				title="Lifecycle events"
				on:beforeshow={recordEvent}
				on:show={recordEvent}
				on:shown={recordEvent}
				on:beforehide={recordEvent}
				on:hide={recordEvent}
				on:hidden={recordEvent}>
				<label><input class="uk-checkbox" type="checkbox" bind:checked={preventClose} /> Prevent closing</label>
				<p>Uncheck the box to allow closing again.</p>
			</Modal>
		</TabContent>
		<TabContent tabIdent="modal-events-code"><HighlightSvelte code={eventsCode} /></TabContent>
	</svelte:fragment>
</Tabset>

<p>The default slot provides the body. The optional <code>header</code> slot replaces the title header; <code>footer</code> adds a footer.</p>
<p>Use <code>title</code> or <code>label</code> to give the dialog a meaningful accessible name.</p>
<ShowcaseTable title="Methods (via bind:this)" data={methods} />
<p>Methods return UIkit's result. Use <code>shown</code> and <code>hidden</code> to observe completed animations.</p>
<ShowcaseOptEvents {options} {events} />

<style>
	.full-modal-layout {
		min-height: 100vh;
	}

	:global(.full-modal-example .uk-modal-body) {
		padding: 0;
	}
</style>
