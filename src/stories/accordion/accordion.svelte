<script lang="ts">
	import Accordion from "$lib/components/accordion/accordion.svelte";
	import AccordionItem from "$lib/components/accordion/accordion-item.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let collapsible = false;
	export let multiple = true;
	export function beforeshow() {
		dispatch("beforeshow", event);
	}
</script>

<Accordion on:beforeshow={beforeshow} {collapsible} {multiple}>
	<AccordionItem header="Header 1">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
	</AccordionItem>
	<AccordionItem header="Header 2">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
	</AccordionItem>
	<AccordionItem header="Header 3">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
		voluptua. At vero eos et accusam et justo duo dolores
	</AccordionItem>
</Accordion>
