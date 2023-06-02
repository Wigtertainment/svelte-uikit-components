<script lang="ts">
	import Alert from "$lib/components/alert/alert.svelte";
</script>

<h1>Alert</h1>
<Alert showClose={false} animation={true} duration={150} style="primary"
	>Content as a Slot
</Alert>
