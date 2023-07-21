<script lang="ts">
    import { Spinner, Tabset, Tab, TabContent } from '$lib/index.js';
    import { HighlightSvelte } from 'svelte-highlight';
    import type { IShowcaseTableData } from '../shared/types.js';
    import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

    let code = `
<Spinner />
    `;

    let codeRatio = `
<Spinner />
<Spinner ratio={2} />
<Spinner ratio={3} />
    `;

    let options: IShowcaseTableData[] = [
        {
            name: 'ratio',
            description: '-',
            type: `number`,
            default: '1',
        },
    ];

    let events: IShowcaseTableData[] = [];
</script>

<h1>Spinner</h1>
<h3>Default</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Spinner />
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte {code} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Ratio</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Spinner />
            <Spinner ratio={2} />
            <Spinner ratio={3} />
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeRatio} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<ShowcaseOptEvents {options} {events} />
