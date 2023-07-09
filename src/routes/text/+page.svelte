<script lang="ts">
    import { Text, Tabset, Tab, TabContent } from '$lib/index.js'
    import { HighlightSvelte } from 'svelte-highlight'
    import type { IShowcaseTableData } from '../shared/types.js'
    import ShowcaseOptEvents from '../shared/showcase-opt-events.svelte'

    let codeStyle = `
<Text>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text style="lead">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text style="meta">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
    `

    let codeSize = `
<Text>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text fontSize="small">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text fontSize="large">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
    `

    let codeWeight = `
<Text fontWeight="bold">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text fontWeight="light">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text fontWeight="normal">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text fontWeight="bolder">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text fontWeight="lighter">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
    `

    let codeItalic = `
<Text italic={true}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
    `

    let codeTransform = `
<Text transform="capitalize">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text transform="lowercase">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text transform="uppercase">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
    `

    let codeColor = `
<Text color="danger">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text color="emphasis">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text color="muted">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text color="primary">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text color="secondary">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text color="success">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
<Text color="warning">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr
</Text>
    `

    let options: IShowcaseTableData[] = [
        {
            name: 'style',
            description: '-',
            type: `'default' | 'lead' | 'meta'`,
            default: 'default',
        },
        {
            name: 'size',
            description: '-',
            type: `'default' | 'small' | 'large'`,
            default: 'default',
        },
        {
            name: 'weight',
            description: '-',
            type: `'light' | 'normal' | 'bold' | 'lighter' | 'bolder'`,
            default: 'normal',
        },
        {
            name: 'italic',
            description: '-',
            type: `boolean`,
            default: 'false',
        },
        {
            name: 'transform',
            description: '-',
            type: `'capitalize' | 'uppercase' | 'lowercase' | undefined`,
            default: 'undefined',
        },
        {
            name: 'color',
            description: '-',
            type: `'muted' | 'emphasis' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined`,
            default: 'undefined',
        },
		{
			name: 'alignment',
			description: '-',
            type: `'left' | 'right' | 'center' | 'justify' | undefined`,
            default: 'undefined',
		}
    ]

    let events: IShowcaseTableData[] = []
</script>

<h1>Text</h1>
<h3>Style</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Text>Defailt - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text style="lead">Lead - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text style="meta">Meta - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
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
            <Text>Defailt - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text fontSize="small">Small - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text fontSize="large">Large - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeSize} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Weight</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Text fontWeight="bold">Bold - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text fontWeight="light">Light - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text fontWeight="normal">Nomal - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text fontWeight="bolder">Bolder - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text fontWeight="lighter">Lighter - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeWeight} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Italic</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Text italic={true}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeItalic} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Transform</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Text transform="capitalize">Capitalize - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text transform="lowercase">lowercase - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text transform="uppercase">uppercase - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeTransform} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Color</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Text color="danger">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text color="emphasis">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text color="muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text color="primary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text color="secondary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text color="success">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text color="warning">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeColor} />
        </TabContent>
    </svelte:fragment>
</Tabset>

<h3>Alignment</h3>
<Tabset>
    <svelte:fragment slot="tabs">
        <Tab ident={'pre'} active={true}>Preview</Tab>
        <Tab ident={'code'}>Code</Tab>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <TabContent tabIdent="pre">
            <Text alignment="left">Left - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text alignment="right">Right - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text alignment="center">Center - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
            <Text alignment="justify">Justify - Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte code={codeColor} />
        </TabContent>
    </svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
