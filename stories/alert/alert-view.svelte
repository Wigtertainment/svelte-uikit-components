<script>
  import Content from "../content-view.svelte";
  import Alert from "../../src/components/alert/alert.svelte";

  export let content = "Content as a Slot";
  export let showClose = false;
  export let animation = false;
  export let duration = 150;
  export let style = "primary";
</script>

<Content>
  <Alert {showClose} {animation} {duration} {style}>{content}</Alert>
</Content>
