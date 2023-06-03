<script lang="ts">
	import { Alert, Tabset, Tab, TabContent } from "$lib/index.js";
	import Highlight from "svelte-highlight";
	import typescript from "svelte-highlight/languages/typescript";

	let code = `
<Alert showClose={false} animation={true} duration={150} style="danger">Danger Alert Content</Alert>
    `;
</script>

<h1>Alert</h1>
<Tabset>
	<svelte:fragment slot="tabs">
		<Tab ident={"pre"} active={true}>Preview</Tab>
		<Tab ident={"code"}>Code</Tab>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<TabContent tabIdent="pre">
			<Alert
				showClose={false}
				animation={true}
				duration={150}
				style="primary"
				>Primary Alert Content
			</Alert>
			<Alert
				showClose={false}
				animation={true}
				duration={150}
				style="success"
				>Success Alert Content
			</Alert>
			<Alert
				showClose={false}
				animation={true}
				duration={150}
				style="warning"
				>Warning Alert Content
			</Alert>
			<Alert
				showClose={false}
				animation={true}
				duration={150}
				style="danger"
				>Danger Alert Content
			</Alert>
		</TabContent>
		<TabContent tabIdent="code">
			<Highlight language={typescript} {code} />
		</TabContent>
	</svelte:fragment>
</Tabset>
