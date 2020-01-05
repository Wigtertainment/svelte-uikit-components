<script>
  import { createEventDispatcher } from "svelte";

  export let text = "";
  export let style = "default"; //default / primary / secondary / danger / text / link
  export let size = "small"; //small / large
  export let width = "default"; //deafult / full

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch("click", event);
  }
</script>

<button
  class="uk-button"
  class:uk-button-default={style === 'default'}
  class:uk-button-primary={style === 'primary'}
  class:uk-button-secondary={style === 'secondary'}
  class:uk-button-danger={style === 'danger'}
  class:uk-button-text={style === 'text'}
  class:uk-button-link={style === 'link'}
  class:uk-button-small={size === 'small'}
  class:uk-button-large={size === 'large'}
  class:uk-width-1-1={width === 'full'}
  on:click={onClick}>
  {text}
</button>
