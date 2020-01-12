<script>
  import Content from "../content-view.svelte";
  import Countdown from "../../src/components/countdown/countdown.svelte";
  import { onMount } from "svelte";

  export let date = null;
  export let separator = ":";
  export let daysLabel = "Days";
  export let hoursLabel = "Hours";
  export let minutesLabel = "Minutes";
  export let secondsLabel = "Seconds";
</script>

<Content>
  <Countdown {date} {separator} {daysLabel} {hoursLabel} {minutesLabel} {secondsLabel} />
</Content>
