<script lang="ts">
	import Article from "$lib/components/article/article.svelte";
	import ArticleMeta from "$lib/components/article/article-meta.svelte";
	import ArticleTitle from "$lib/components/article/article-title.svelte";
</script>

<h1>Article</h1>
<Article>
	<ArticleTitle>LOREM IPSUM</ArticleTitle>
	<ArticleMeta>From Egor Kin</ArticleMeta>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>
</Article>
