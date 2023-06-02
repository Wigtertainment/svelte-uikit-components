<script lang="ts">
	import Button from "$lib/components/button/button.svelte";
	import ButtonGroup from "$lib/components/button/button-group.svelte";
</script>

<h1>ButtonGroup</h1>
<ButtonGroup>
	<Button label="Button 1" style="default" />
	<Button label="Button 2" style="primary" />
	<Button label="Button 3" style="danger" />
</ButtonGroup>
