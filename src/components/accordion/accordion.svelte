<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { uuidv4 } from "../shared/uuid.service.js";
  import UIkit from "uikit";

  const dispatch = createEventDispatcher();
  let uikitAccordionEl;
  let id;

  export let collapsible = false;
  export let multiple = true;

  onMount(async () => {
    let selector = `[data-id='${getId()}']`;
    let element = document.querySelectorAll(selector);
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

  function getOpt() {
    return `collapsible:${collapsible};multiple:${multiple}`;
  }

  export function toggle(index, animate) {
    uikitAccordionEl.toggle(index, animate);
  }
</script>

<ul data-id={getId()} uk-accordion={getOpt()}>
  <slot />
</ul>
