<script lang="ts">
	import Comment from "$lib/components/comment/comment.svelte";
	import CommentHeader from "$lib/components/comment/comment-header.svelte";
	import CommentAvatar from "$lib/components/comment/comment-avatar.svelte";
	import CommentTitle from "$lib/components/comment/comment-title.svelte";
	import CommentMetaList from "$lib/components/comment/comment-meta-list.svelte";
	import CommentBody from "$lib/components/comment/comment-body.svelte";
</script>

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
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
			nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
			erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
			et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
			Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
			sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
			et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
			accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
			no sea takimata sanctus est Lorem ipsum dolor sit amet.
		</p>
	</CommentBody>
</Comment>
