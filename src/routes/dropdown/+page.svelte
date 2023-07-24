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

    let options: IShowcaseTableData[] = [
        {
            name: 'mode',
            description: '-',
            type: `'hover' | 'click'`,
            default: 'hover',
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
        </TabContent>
        <TabContent tabIdent="code">
            <HighlightSvelte {code} />
        </TabContent>
    </svelte:fragment>
</Tabset>
<ShowcaseOptEvents {options} {events} />
