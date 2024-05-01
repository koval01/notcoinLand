<script lang="ts">
	import { Home } from "./elements/home";
	import { NoMatch } from "./elements/noMatch";

	import { Router, Route } from "svelte-routing";

	export let url: string = "";
</script>

<svelte:head>
	{#if import.meta.env.PROD}
	<script defer data-domain={document.location.host} src="https://plausible.joincommunity.xyz/js/script.js"></script>
	{/if}
</svelte:head>

<Router {url}>
	<main class="select-none">
		<Route patth="*"><NoMatch /></Route>
		<Route path="/"><Home /></Route>
	</main>
</Router>
