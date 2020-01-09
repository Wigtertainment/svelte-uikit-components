<script>
  import "uikit";
  import Button from "../../src/components/button/button.svelte";
  import Card from "../../src/components/card/card.svelte";
  import CardHeader from "../../src/components/card/card-header.svelte";
  import CardFooter from "../../src/components/card/card-footer.svelte";
  import CardContent from "../../src/components/card/card-content.svelte";
  import Content from "../content-view.svelte";
</script>

<Content>
  <Card>
    <CardHeader>
      <h1>Header</h1>
    </CardHeader>
    <CardContent>Card Content</CardContent>
    <CardFooter>
      <Button text="Action" />
    </CardFooter>
  </Card>
</Content>
