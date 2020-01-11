<script>
  import Button from "../../src/components/button/button.svelte";
  import ButtonGroup from "../../src/components/button/button-group.svelte";
  import Content from "../content-view.svelte";

  export let text = "Click";
  export let style = "";
  export let size = "";
  export let width;
</script>

<Content>
  <ButtonGroup>
    <Button text="Button 1" style="default" />
    <Button text="Button 2" style="primary" />
    <Button text="Button 3" style="danger" />
  </ButtonGroup>
</Content>
