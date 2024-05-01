<script lang="ts">
	import Home from "./routes/Home.svelte";
	import NoMatch from "./routes/NoMatch.svelte";

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
