<script>
	export let cssClass = '';
</script>

<ul class="uk-comment-meta uk-subnav {cssClass ? cssClass : ''}">
	<slot />
</ul>
