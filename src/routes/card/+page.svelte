<script lang="ts">
	import Button from "$lib/components/button/button.svelte";
	import Card from "$lib/components/card/card.svelte";
	import CardHeader from "$lib/components/card/card-header.svelte";
	import CardFooter from "$lib/components/card/card-footer.svelte";
	import CardContent from "$lib/components/card/card-content.svelte";
</script>

<h1>Card</h1>
<Card>
	<CardHeader>
		<h1>Header</h1>
	</CardHeader>
	<CardContent>Card Content</CardContent>
	<CardFooter>
		<Button label="Action" />
	</CardFooter>
</Card>
