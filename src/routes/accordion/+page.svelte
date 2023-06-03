<script>
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
	import AccordionItem from "$lib/components/accordion/accordion-item.svelte";
	import Accordion from "$lib/components/accordion/accordion.svelte";

	let code = `
        <Accordion collapsible={true}>
            <AccordionItem header="TEST">DAS ist nur ein TEST</AccordionItem>
            <AccordionItem header="TEST 1">DAS ist nur ein TEST 1</AccordionItem>
            <AccordionItem header="TEST 2">DAS ist nur ein TEST 2</AccordionItem>
        </Accordion>
    `;
</script>

<h1>Accordion</h1>
<Accordion collapsible={true}>
	<AccordionItem header="TEST">DAS ist nur ein TEST</AccordionItem>
	<AccordionItem header="TEST 1">DAS ist nur ein TEST 1</AccordionItem>
	<AccordionItem header="TEST 2">DAS ist nur ein TEST 2</AccordionItem>
</Accordion>

<Highlight language={typescript} {code} />
