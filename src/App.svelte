<script>
  import Accordion from "./components/accordion/accordion.svelte";
  import AccordionItem from "./components/accordion/accordion-item.svelte";
  import Button from "./components/button/button.svelte";
  import ButtonGroup from "./components/button/button-group.svelte";
  import Card from "./components/card/card.svelte";
  import CardHeader from "./components/card/card-header.svelte";
  import CardMedia from "./components/card/card-media.svelte";
  import CardFooter from "./components/card/card-footer.svelte";
  import CardContent from "./components/card/card-content.svelte";

  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h4>Card</h4>
  <Card hover="true">
    <CardMedia>
      <img
        src="https://mocah.org/uploads/posts/120363-chrome-os-material-design-stock-hd.jpg"
        alt="W3Schools.com" />
    </CardMedia>
    <CardContent>
      <h3 class="uk-card-title">Hello {name}!</h3>
      <p>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps.
      </p>
    </CardContent>
    <CardFooter>
      <Button text="Action" style="primary" width="full" />
    </CardFooter>
  </Card>
  <h4>ButtonGroup</h4>
  <ButtonGroup>
    <Button text="Action" style="default" />
    <Button text="Action" style="primary" />
    <Button text="Action" style="secondary" />
    <Button text="Action" style="danger" />
    <Button text="Action" style="text" />
    <Button text="Action" style="link" />
  </ButtonGroup>
  <h4>Accordion</h4>
  <Accordion>
    <AccordionItem header="1">Test 1</AccordionItem>
    <AccordionItem header="2">Test 2</AccordionItem>
    <AccordionItem header="3">Test 3</AccordionItem>
  </Accordion>
</main>
