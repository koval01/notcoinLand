<script lang="ts">
    import { onMount } from "svelte";

    import { getRandomRange } from "../../utils";
    import { calculateOpacity } from "./misc";

    $: {
        opacity = calculateOpacity(progress, false);
    }

    const generatePositions = () => {
        for (let i = 0; i < 3; i++) {
            positions["left"].push(getRandomRange(-8, 30));
            positions["right"].push(getRandomRange(-8, 30));
        }
    }

    onMount(() => generatePositions())

    let opacity: number;
    let positions: object = { left: [], right: [] };

    export let progress: number;
</script>

{#each positions["left"] as pos, _}
    <!-- Left -->
    <img 
        class="absolute -z-10 w-32 md:w-48" 
        src="/images/skin-punks.webp" 
        alt="Skin Punks" 
        draggable="false" 
        loading="lazy"
        style="left: {pos + Math.pow(progress * 8, 2)}%; top: {getRandomRange(0, 100)}%; opacity: {opacity}; scale: {opacity}" 
    />
{/each}

{#each positions["right"] as pos, _}
    <!-- Right -->
    <img 
        class="absolute -z-10 w-32 md:w-48" 
        src="/images/skin-punks.webp" 
        alt="Skin Punks" 
        draggable="false" 
        loading="lazy"
        style="right: {pos + Math.pow(progress * 8, 2)}%; top: {getRandomRange(0, 100)}%; opacity: {opacity}; scale: {opacity}"
    />
{/each}
