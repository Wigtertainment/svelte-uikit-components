<script>
  export let hover = true;
  export let size = "small";
  export let style = "default";
</script>

<div
  class="uk-card uk-card-default"
  class:uk-card-hover={hover}
  class:uk-card-small={size === 'small'}
  class:uk-card-large={size === 'large'}
  class:uk-card-default={style === 'default'}
  class:uk-card-primary={style === 'primary'}
  class:uk-card-secondary={style === 'secondary'}>
  <slot />
</div>
