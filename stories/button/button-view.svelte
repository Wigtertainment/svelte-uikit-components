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
  <Button {text} {style} {size} {width} />
</Content>
