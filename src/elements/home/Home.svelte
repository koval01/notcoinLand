<script lang="ts">
    import Stars from "../misc/Stars.svelte";
    import Nothing from "./Nothing.svelte";

    export let noMatch = false;
</script>

<div class="relative {noMatch ? '' : 'min-h-screen'}">
    <div class="my-0 mx-auto py-0 px-4 max-w-[1040px]">
        <div class="pb-16 w-full">
            <Stars count={4} />
            {#if noMatch}
                <Nothing />
            {/if}
        </div>
    </div>
</div>
