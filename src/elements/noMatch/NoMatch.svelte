<script lang="ts">
    import Header from "../Header.svelte";

    import Stars from "../misc/Stars.svelte";
    import Head from "./Head.svelte";
</script>

<Header />

<div class="relative">
    <div class="my-0 mx-auto py-0 px-4 max-w-[1040px]">
        <div class="pb-16 w-full">
            <Stars count={4} />
            <Head />
        </div>
    </div>
</div>
