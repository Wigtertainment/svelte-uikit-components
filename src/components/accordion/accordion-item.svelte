<script>
  export let header = "";
</script>

<li>
  <a class="uk-accordion-title" href="#">{header}</a>
  <div class="uk-accordion-content">
    <slot />
  </div>
</li>
