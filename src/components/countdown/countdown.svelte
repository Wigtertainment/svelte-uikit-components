<script>
  import { onMount } from "svelte";
  import { uuidv4 } from "../shared/uuid.service.js";
  import UIkit from "uikit";
  export let date = null;
  export let separator = ":";
  export let daysLabel = "Days";
  export let hoursLabel = "Hours";
  export let minutesLabel = "Minutes";
  export let secondsLabel = "Seconds";

  let element;
  onMount(async () => {
    let selector = `[data-id='${getId()}']`;
    element = document.querySelectorAll(selector);
    UIkit.countdown(element, {});
    UIkit.countdown(element).start();
  });

  let id;
  function getId() {
    if (!id) id = uuidv4();
    return id;
  }
</script>

<div
  data-id={getId()}
  class="uk-grid-small uk-child-width-auto"
  uk-grid
  uk-countdown="date: {date}">
  <div>
    <div class="uk-countdown-number uk-countdown-days" />
    <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
      {daysLabel}
    </div>
  </div>
  <div class="uk-countdown-separator">{separator}</div>
  <div>
    <div class="uk-countdown-number uk-countdown-hours" />
    <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
      {hoursLabel}
    </div>
  </div>
  <div class="uk-countdown-separator">{separator}</div>
  <div>
    <div class="uk-countdown-number uk-countdown-minutes" />
    <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
      {minutesLabel}
    </div>
  </div>
  <div class="uk-countdown-separator">{separator}</div>
  <div>
    <div class="uk-countdown-number uk-countdown-seconds" />
    <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">
      {secondsLabel}
    </div>
  </div>
</div>
