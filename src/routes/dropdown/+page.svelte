<script lang="ts">
    import { DropDown, Button, Tabset, Tab, TabContent } from '$lib/index.js';
    import { HighlightSvelte } from 'svelte-highlight';
    import type { IShowcaseTableData } from '../shared/types.js';
    import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

    let code = `
<DropDown>
    <Button slot="button">HOVER</Button>
    <span>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.
    </span>
</DropDown>
    `;

    let codePadding = `
<DropDown padding={'large'}>
    <Button slot="button">HOVER</Button>
    <span>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.
    </span>
</DropDown>
    `;

    let codePosition = `
<DropDown position={'left-bottom'}>
    <Button slot="button">LEFT-BOTTOM</Button>
    <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
</DropDown>
<DropDown position={'top-center'}>
    <Button slot="button">TOP-CENTER</Button>
    <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
</DropDown>
<DropDown position={'bottom-center'}>
    <Button slot="button">BOTTOM-CENTER</Button>
    <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
</DropDown>
<DropDown position={'right-top'}>
    <Button slot="button">RIGHT-TOP</Button>
    <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
</DropDown>
    `;

    let codeAnimation = `
<DropDown animation={'reveal-bottom'} animationOut={true} animationDuration={1000}>
    <Button slot="button">LEFT-BOTTOM</Button>
    <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
</DropDown>
    `;

    let codeOffset = `
<DropDown offset={80}>
    <Button slot="button">HOVER</Button>
    <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
</DropDown>
    `;

    let options: IShowcaseTableData[] = [
        {
            name: 'mode',
            description: '-',
            type: `'hover' | 'click'`,
            default: 'hover',
        },
        {
            name: 'padding',
            description: '-',
            type: `'default' | 'large'`,
            default: 'default',
        },
    ];

    let events: IShowcaseTableData[] = [];
</script>

<h1>DropDown</h1>
<h3>Default</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <DropDown>
                <Button slot="button">HOVER</Button>
                <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua.
                </span>
            </DropDown>
            <DropDown mode="click">
                <Button slot="button">CLICK</Button>
                <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua.
                </span>
            </DropDown>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte {code} />
        </TabContent>
    </svelte:fragment>
</Tabset>
<h3>Padding</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <DropDown padding={'large'}>
                <Button slot="button">HOVER</Button>
                <span>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua.
                </span>
            </DropDown>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codePadding} />
        </TabContent>
    </svelte:fragment>
</Tabset>
<h3>Position</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <DropDown position={'left-bottom'}>
                <Button slot="button">LEFT-BOTTOM</Button>
                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
            </DropDown>
            <DropDown position={'top-center'}>
                <Button slot="button">TOP-CENTER</Button>
                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
            </DropDown>
            <DropDown position={'bottom-center'}>
                <Button slot="button">BOTTOM-CENTER</Button>
                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
            </DropDown>
            <DropDown position={'right-top'}>
                <Button slot="button">RIGHT-TOP</Button>
                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
            </DropDown>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codePosition} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Animation</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <DropDown animation={'reveal-bottom'} animationOut={true} animationDuration={1000}>
                <Button slot="button">HOVER</Button>
                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
            </DropDown>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeAnimation} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Offset</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <DropDown offset={80}>
                <Button slot="button">HOVER</Button>
                <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
            </DropDown>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeOffset} />
        </TabContent>
    </svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
