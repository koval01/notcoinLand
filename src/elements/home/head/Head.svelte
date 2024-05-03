<script lang="ts">
    import Text from "./Text.svelte";
    import Coin from "./Coin.svelte";

    import { Down } from "../../icons";

    export let progress: number;
    let opacity: number, scale: number, translate: string;

    $: {
        opacity = Math.pow(1 - progress, 2);
        scale = Math.pow(1 - progress, 2) * 2;
        translate = Math.pow(1 - progress * 72, 2).toFixed();
    }
</script>

<div class="mt-96">
    <Text progress={progress} />
    <Coin progress={progress} />
</div>

<div class="absolute bottom-12 md:bottom-8 w-full -z-10 perspective">
    <Down class="m-auto fill-white w-12 h-12" style="opacity: {opacity}; transform: scale({scale}) translateY({translate}%)" />
</div>

<style lang="sass">
    .perspective
        perspective: 1000px
        transform: rotateX(65deg) rotate(180deg)

</style>

