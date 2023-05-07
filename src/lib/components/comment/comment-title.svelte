<script>
  export let cssClass = "";
</script>

<h4 class="uk-comment-title {cssClass ? cssClass : ''}">
  <slot />
</h4>
