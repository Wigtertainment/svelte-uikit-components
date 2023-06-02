<script lang="ts">
	import Countdown from "$lib/components/countdown/countdown.svelte";
</script>

<h1>Countdown</h1>
<Countdown date={new Date(`${new Date().getFullYear() + 1}-1-1`)} />
