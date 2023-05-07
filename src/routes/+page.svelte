<script>
	import AccordionItem from "$lib/components/accordion/accordion-item.svelte";
	import Accordion from "$lib/components/accordion/accordion.svelte";
	import Article from "$lib/components/article/article.svelte";
	import ArticleMeta from "$lib/components/article/article-meta.svelte";
	import ArticleTitle from "$lib/components/article/article-title.svelte";
	import Alert from "$lib/components/alert/alert.svelte";
	import Button from "$lib/components/button/button.svelte";
	import ButtonGroup from "$lib/components/button/button-group.svelte";
	import Card from "$lib/components/card/card.svelte";
	import CardHeader from "$lib/components/card/card-header.svelte";
	import CardFooter from "$lib/components/card/card-footer.svelte";
	import CardContent from "$lib/components/card/card-content.svelte";
	import Comment from "$lib/components/comment/comment.svelte";
	import CommentHeader from "$lib/components/comment/comment-header.svelte";
	import CommentAvatar from "$lib/components/comment/comment-avatar.svelte";
	import CommentTitle from "$lib/components/comment/comment-title.svelte";
	import CommentMetaList from "$lib/components/comment/comment-meta-list.svelte";
	import CommentBody from "$lib/components/comment/comment-body.svelte";
	import Countdown from "$lib/components/countdown/countdown.svelte";
</script>

<h1>Welcome to your library project</h1>
<p>
	Create your package using @sveltejs/package and preview/showcase your work
	with SvelteKit
</p>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div style="padding: 20px;">
	<h1>Accordion</h1>
	<Accordion collapsible={true}>
		<AccordionItem header="TEST">DAS ist nur ein TEST</AccordionItem>
		<AccordionItem header="TEST 1">DAS ist nur ein TEST 1</AccordionItem>
		<AccordionItem header="TEST 2">DAS ist nur ein TEST 2</AccordionItem>
	</Accordion>
	<h1>Article</h1>
	<Article>
		<ArticleTitle>LOREM IPSUM</ArticleTitle>
		<ArticleMeta>From Egor Kin</ArticleMeta>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
			ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Article>
	<h1>Alert</h1>
	<Alert showClose={false} animation={true} duration={150} style="primary"
		>Content as a Slot
	</Alert>
	<h1>ButtonGroup</h1>
	<ButtonGroup>
		<Button text="Button 1" style="default" />
		<Button text="Button 2" style="primary" />
		<Button text="Button 3" style="danger" />
	</ButtonGroup>
	<h1>Button</h1>
	<Button text="Click" />
	<h1>Card</h1>
	<Card>
		<CardHeader>
			<h1>Header</h1>
		</CardHeader>
		<CardContent>Card Content</CardContent>
		<CardFooter>
			<Button text="Action" />
		</CardFooter>
	</Card>
	<h1>Comment</h1>
	<Comment primary={false}>
		<CommentHeader>
			<CommentAvatar
				src={"http://qa-dental.co.uk/wp-content/uploads/2017/02/avatar-man.png"}
			/>
			<CommentTitle>Max Power</CommentTitle>
			<CommentMetaList>
				<li>
					<a href="#">12 days ago</a>
				</li>
				<li>
					<a href="#">Reply</a>
				</li>
			</CommentMetaList>
		</CommentHeader>
		<CommentBody>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
				diam nonumy eirmod tempor invidunt ut labore et dolore magna
				aliquyam erat, sed diam voluptua. At vero eos et accusam et
				justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
				takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
				dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores
				et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
				est Lorem ipsum dolor sit amet.
			</p>
		</CommentBody>
	</Comment>
	<h1>Countdown</h1>
	<Countdown date={new Date(`${new Date().getFullYear() + 1}-1-1`)} />
</div>
