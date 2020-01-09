<script>
  export let header = "";
</script>

<!-- <style>
  li {
    border-bottom: 1px lightgray solid;
  }
</style> -->

<li>
  <a class="uk-accordion-title" href="#">{header}</a>
  <div class="uk-accordion-content">
    <slot />
  </div>
</li>
