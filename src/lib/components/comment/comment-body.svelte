<script>
  export let cssClass = "";
</script>

<div class="uk-comment-body {cssClass ? cssClass : ''}">
  <slot />
</div>
