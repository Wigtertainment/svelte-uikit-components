<script lang="ts">
    export let mode: 'hover' | 'click' = 'hover';
</script>

<!-- <button type="button" /> -->
<slot name="button" />
{#if mode == 'click'}
    <div uk-dropdown="mode: click">
        <slot />
    </div>
{:else}
    <div uk-dropdown>
        <slot />
    </div>
{/if}
