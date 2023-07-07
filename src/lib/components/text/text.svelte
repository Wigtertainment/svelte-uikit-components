<script lang="ts">
	import type {
		FontColor,
		FontSize,
		FontStyle,
		FontTransform,
		FontWeight,
	} from "./types.js";
	export let style: FontStyle = undefined;
	export let fontSize: FontSize = "default";
	export let fontWeight: FontWeight = "normal";
	export let italic: boolean = false;
	export let transform: FontTransform = undefined;
	export let color: FontColor = undefined;
</script>

<div
	class={`${color ? "uk-text-" + color : ""}`}
	class:uk-text-lead={style === "lead"}
	class:uk-text-meta={style === "meta"}
	class:uk-text-small={fontSize === "small"}
	class:uk-text-default={fontSize === "default"}
	class:uk-text-large={fontSize === "large"}
	class:uk-text-light={fontWeight === "light"}
	class:uk-text-normal={fontWeight === "normal"}
	class:uk-text-bold={fontWeight === "bold"}
	class:uk-text-lighter={fontWeight === "lighter"}
	class:uk-text-bolder={fontWeight === "bolder"}
	class:uk-text-italic={italic}
	class:uk-text-capitalize={transform === "capitalize"}
	class:uk-text-uppercase={transform === "uppercase"}
	class:uk-text-lowercase={transform === "lowercase"}
>
	<slot />
</div>
