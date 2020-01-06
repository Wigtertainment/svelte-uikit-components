<script>
  import { onMount, createEventDispatcher } from "svelte";
  import UIkit from "uikit";

  const dispatch = createEventDispatcher();
  let uikitAccordionEl;
  let id;

  onMount(async () => {
    let element = document.getElementById(getId());
    uikitAccordionEl = UIkit.accordion(element, {});
    uikitAccordionEl.$el.addEventListener("beforeshow", event => {
      dispatch("beforeshow", event);
    });
    uikitAccordionEl.$el.addEventListener("show", event => {
      dispatch("show", event);
    });
    uikitAccordionEl.$el.addEventListener("shown", event => {
      dispatch("shown", event);
    });
    uikitAccordionEl.$el.addEventListener("beforehide", event => {
      dispatch("beforehide", event);
    });
    uikitAccordionEl.$el.addEventListener("hide", event => {
      dispatch("hide", event);
    });
    uikitAccordionEl.$el.addEventListener("hide", event => {
      dispatch("hidden", event);
    });
  });

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

  export function toggle(index, animate) {
    uikitAccordionEl.toggle(index, animate);
  }
</script>

<ul id={getId()} uk-accordion>
  <slot />
</ul>
