<script lang="ts">
    import { tooltip, Tabset, Tab, TabContent, Button } from '$lib/index.js';
    import { HighlightSvelte } from 'svelte-highlight';
    import type { IShowcaseTableData } from '../shared/types.js';
    import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte';

    let code = `
<span use:tooltip={{ title: 'Test Tooltip' }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
    `;

    let codeDelay = `
<span use:tooltip={{ title: 'Test Tooltip', delay: 1000 }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
    `;

    let codeAnimation = `
<span use:tooltip={{ title: 'Test Tooltip', animation: 'uk-animation-shake' }}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
    `;

    let eventCode = `
<span use:tooltip={{ title: 'Event beforeshow Tooltip' }} on:beforeshow={() => alert('Event beforeshow!')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
<span use:tooltip={{ title: 'Event show Tooltip' }} on:show={() => alert('Event show!')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
<span use:tooltip={{ title: 'Event shown Tooltip' }} on:shown={() => alert('Event shown!')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
<span use:tooltip={{ title: 'Event beforehide Tooltip' }} on:beforehide={() => alert('Event beforehide!')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
<span use:tooltip={{ title: 'Event hide Tooltip' }} on:hide={() => alert('Event hide!')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
<span use:tooltip={{ title: 'Event hidden Tooltip' }} on:hidden={() => alert('Event hidden!')}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</span>
    `;

    let codePos = `
<span use:tooltip={{ title: 'Bottom Tooltip', pos: 'bottom' }}>
    <Button>BOTTOM</Button>
</span>
<span use:tooltip={{ title: 'Bottom Left Tooltip', pos: 'bottom-left' }}>
    <Button>BOTTOM LEFT</Button>
</span>
<span use:tooltip={{ title: 'Bottom Right Tooltip', pos: 'bottom-right' }}>
    <Button>BOTTOM RIGHT</Button>
</span>
<span use:tooltip={{ title: 'Top Tooltip', pos: 'top' }}>
    <Button>TOP</Button>
</span>
<span use:tooltip={{ title: 'Top Left Tooltip', pos: 'top-left' }}>
    <Button>TOP LEFT</Button>
</span>
<span use:tooltip={{ title: 'Top Right Tooltip', pos: 'top-right' }}>
    <Button>TOP RIGHT</Button>
</span>
<span use:tooltip={{ title: 'Left Tooltip', pos: 'left' }}>
    <Button>LEFT</Button>
</span>
<span use:tooltip={{ title: 'Right Tooltip', pos: 'right' }}>
    <Button>RIGHT</Button>
</span>
    `;

    let options: IShowcaseTableData[] = [
        {
            name: 'title',
            description: '-',
            type: `string`,
            default: '',
        },
        {
            name: 'pos',
            description: '-',
            type: `string`,
            default: 'top-center',
        },
        {
            name: 'offset',
            description: '-',
            type: `number | boolean`,
            default: 'false',
        },
        {
            name: 'animation',
            description: '-',
            type: `string`,
            default: 'uk-animation-scale-up',
        },
        {
            name: 'duration',
            description: '-',
            type: `number`,
            default: '100',
        },
        {
            name: 'delay',
            description: '-',
            type: `number`,
            default: '0',
        },
        {
            name: 'cls',
            description: '-',
            type: `string`,
            default: 'uk-active',
        },
        {
            name: 'container',
            description: '-',
            type: `string`,
            default: 'body',
        },
    ];

    let events: IShowcaseTableData[] = [
        {
            name: 'beforeshow',
            description: '-',
        },
        {
            name: 'show',
            description: '-',
        },
        {
            name: 'shown',
            description: '-',
        },
        {
            name: 'beforehide',
            description: '-',
        },
        {
            name: 'hide',
            description: '-',
        },
        {
            name: 'hidden',
            description: '-',
        },
    ];
</script>

<h1>Tooltip - Action</h1>
<h3>Default</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <span use:tooltip={{ title: 'Test Tooltip' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte {code} />
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
            <span use:tooltip={{ title: 'Bottom Tooltip', pos: 'bottom' }}>
                <Button>BOTTOM</Button>
            </span>
            <span use:tooltip={{ title: 'Bottom Left Tooltip', pos: 'bottom-left' }}>
                <Button>BOTTOM LEFT</Button>
            </span>
            <span use:tooltip={{ title: 'Bottom Right Tooltip', pos: 'bottom-right' }}>
                <Button>BOTTOM RIGHT</Button>
            </span>
            <span use:tooltip={{ title: 'Top Tooltip', pos: 'top' }}>
                <Button>TOP</Button>
            </span>
            <span use:tooltip={{ title: 'Top Left Tooltip', pos: 'top-left' }}>
                <Button>TOP LEFT</Button>
            </span>
            <span use:tooltip={{ title: 'Top Right Tooltip', pos: 'top-right' }}>
                <Button>TOP RIGHT</Button>
            </span>
            <span use:tooltip={{ title: 'Left Tooltip', pos: 'left' }}>
                <Button>LEFT</Button>
            </span>
            <span use:tooltip={{ title: 'Right Tooltip', pos: 'right' }}>
                <Button>RIGHT</Button>
            </span>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codePos} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Delay</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <span use:tooltip={{ title: 'Test Tooltip', delay: 1000 }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </span>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeDelay} />
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
            <span use:tooltip={{ title: 'Test Tooltip', animation: 'uk-animation-shake' }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeAnimation} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Events</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <h4>beforeshow</h4>
            <span use:tooltip={{ title: 'Event beforeshow Tooltip' }} on:beforeshow={() => alert('Event beforeshow!')}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
            <h4>show</h4>
            <span use:tooltip={{ title: 'Event show Tooltip' }} on:show={() => alert('Event show!')}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
            <h4>shown</h4>
            <span use:tooltip={{ title: 'Event shown Tooltip' }} on:shown={() => alert('Event shown!')}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
            <h4>beforehide</h4>
            <span use:tooltip={{ title: 'Event beforehide Tooltip' }} on:beforehide={() => alert('Event beforehide!')}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
            <h4>hide</h4>
            <span use:tooltip={{ title: 'Event hide Tooltip' }} on:hide={() => alert('Event hide!')}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
            <h4>hidden</h4>
            <span use:tooltip={{ title: 'Event hidden Tooltip' }} on:hidden={() => alert('Event hidden!')}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </span>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={eventCode} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<ShowcaseOptEvents {options} {events} />
