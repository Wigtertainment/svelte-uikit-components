<script>
  import { onMount } from "svelte";
  import UIkit from "uikit";

  onMount(async () => {
    let element = document.getElementById(getId());
    UIkit.accordion(element, {});
  });

  let id;

  function getId() {
    if (!id) id = uuidv4();
    return id;
  }

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
</script>

<ul id={getId()} uk-accordion>
  <slot />
</ul>
