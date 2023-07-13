<script lang="ts">
    import type { HeadingSize } from './types.js';

    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' = 'h1';
    export let size: HeadingSize = undefined;
    export let divider: boolean = false;
    export let bullet: boolean = false;
    export let line: 'line-right' | 'line-center' | 'line-left' | undefined = undefined;
</script>

<svelte:element
    this={tag}
    class:uk-heading-small={size === 'small'}
    class:uk-heading-medium={size === 'medium'}
    class:uk-heading-large={size === 'large'}
    class:uk-heading-xlarge={size === 'xlarge'}
    class:uk-heading-2xlarge={size === '2xlarge'}
    class:uk-heading-divider={divider}
    class:uk-heading-bullet={bullet}
    class:uk-heading-line={line}
    class:uk-text-center={line === 'line-center'}
    class:uk-text-right={line === 'line-left'}>
    {#if line}
        <span><slot /></span>
    {:else}
        <slot />
    {/if}
</svelte:element>
