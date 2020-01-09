<script>
  import Accordion from "../../src/components/accordion/accordion.svelte";
  import AccordionItem from "../../src/components/accordion/accordion-item.svelte";
  import Content from "../content-view.svelte";

  export let collapsible = false;
  export let multiple = true;
</script>

<Content>
  <Accordion {collapsible} {multiple}>
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
</Content>
