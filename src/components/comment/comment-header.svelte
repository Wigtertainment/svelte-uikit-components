<script>
  export let cssClass = "";
</script>

<header class="uk-comment-header {cssClass ? cssClass : ''}">
  <slot />
</header>
