<script>
	export let cssClass = '';
	export let primary = false;
</script>

<article class="uk-comment {cssClass ? cssClass : ''}" class:uk-comment-primary={primary}>
	<slot />
</article>
