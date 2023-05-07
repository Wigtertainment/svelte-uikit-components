<script lang="ts">
	export let header: string = "";
</script>

<li>
	<a class="uk-accordion-title" href="#">{header}</a>
	<div class="uk-accordion-content">
		<slot />
	</div>
</li>
