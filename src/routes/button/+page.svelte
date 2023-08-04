<script lang="ts">
    import { HighlightSvelte } from 'svelte-highlight';
    import { Button, Tabset, Tab, TabContent, tooltip } from '$lib/index.js';
    import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';
    import type { IShowcaseTableData } from '../shared/types.js';

    let code = `
<script>
	import { Button } from "svelte-uikit-components";

	function buttonClicked() {
		alert("Button clicked");
	}
<\/script>

<Button label="Click" on:click={buttonClicked} />
    `;

    let codeStyled = `
<script>
	import { Button } from "svelte-uikit-components";

	function buttonClicked() {
		alert("Button clicked");
	}
<\/script>

<Button style="primary" label="Click" on:click={buttonClicked} />
<Button style="secondary" label="Click" on:click={buttonClicked} />
<Button style="danger" label="Click" on:click={buttonClicked} />
<Button style="link" label="Click" on:click={buttonClicked} />
<Button style="text" label="Click" on:click={buttonClicked} />
    `;

    let codeDisabled = `
<script>
	import { Button } from "svelte-uikit-components";

	function buttonClicked() {
		alert("Button clicked");
	}
<\/script>

<Button disabled={true} label="Click" on:click={buttonClicked} />
    `;

    let codeSize = `
<script>
	import { Button } from "svelte-uikit-components";

	function buttonClicked() {
		alert("Button clicked");
	}
<\/script>

<Button size="small" label="Click" on:click={buttonClicked} />
<Button label="Click" on:click={buttonClicked} />
<Button size="large" label="Click" on:click={buttonClicked} />
    `;

    let codeWidth = `
<script>
	import { Button } from "svelte-uikit-components";

	function buttonClicked() {
		alert("Button clicked");
	}
<\/script>

<Button width="full" label="Click" on:click={buttonClicked} />
    `;

    function buttonClicked() {
        alert('Button clicked');
    }

    const options: IShowcaseTableData[] = [
        {
            name: 'label',
            description: '',
            type: 'string',
            default: '',
        },
        {
            name: 'disabled',
            description: '',
            type: 'boolean',
            default: 'false',
        },
        {
            name: 'style',
            description: '',
            type: "'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link'",
            default: 'default',
        },
        {
            name: 'size',
            description: 'Make the button smaller or larger',
            type: "'small' | 'default' | 'large'",
            default: 'default',
        },
        {
            name: 'width',
            description: 'The button will take up full width',
            type: "'default' | 'full'",
            default: 'default',
        },
    ];

    const events: IShowcaseTableData[] = [
        {
            name: 'on:click',
            description: '',
        },
    ];
</script>

<h1>Button</h1>
<h3>Default</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <span
                use:tooltip={{ title: 'TEST' }}
                on:beforeshow={(event) => console.log('beforeshow', event)}
                on:show={(event) => console.log('show', event)}
                on:shown={(event) => console.log('shown', event)}
                on:beforehide={(event) => console.log('beforehide', event)}
                on:hide={(event) => console.log('hide', event)}
                on:hidden={(event) => console.log('hidden', event)}>
                <Button label="Click" on:click={buttonClicked} />
            </span>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte {code} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Styled</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Button style="primary" label="Click" on:click={buttonClicked} />
            <Button style="secondary" label="Click" on:click={buttonClicked} />
            <Button style="danger" label="Click" on:click={buttonClicked} />
            <Button style="link" label="Click" on:click={buttonClicked} />
            <Button style="text" label="Click" on:click={buttonClicked} />
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeStyled} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Disabled</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Button disabled={true} label="Click" on:click={buttonClicked} />
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeDisabled} />
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
            <Button size="small" label="Click" on:click={buttonClicked} />
            <Button label="Click" on:click={buttonClicked} />
            <Button size="large" label="Click" on:click={buttonClicked} />
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeSize} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Width</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Button width="full" label="Click" on:click={buttonClicked} />
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeWidth} />
        </TabContent>
    </svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
