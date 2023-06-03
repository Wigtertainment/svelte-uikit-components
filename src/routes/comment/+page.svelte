<script lang="ts">
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";
	import {
		Comment,
		CommentHeader,
		CommentAvatar,
		CommentTitle,
		CommentMetaList,
		CommentBody,
		Tabset,
		Tab,
		TabContent,
	} from "$lib/index.js";

	let code = `
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
    `;
</script>

<h1>Comment</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
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
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem
						ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore et dolore magna aliquyam erat,
						sed diam voluptua. At vero eos et accusam et justo duo
						dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit amet.
					</p>
				</CommentBody>
			</Comment>
		</TabContent>
		<TabContent tabIdent="code">
			<Highlight language={typescript} {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
