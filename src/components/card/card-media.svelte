<script>
  export let position = "top";
</script>

<div
  class:uk-card-media-top={position === 'top'}
  class:uk-card-media-bottom={position === 'bottom'}
  class:uk-card-media-left={position === 'left'}
  class:uk-card-media-right={position === 'right'}
  class:uk-cover-container={position === 'right' || position === 'left'}>
  <slot />
</div>

