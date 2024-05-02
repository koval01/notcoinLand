<script lang="ts">
    import Text from "./Text.svelte";
    import Coin from "./Coin.svelte";

    import { Down } from "../../icons";

    export let progress: number;
</script>

<div class="mt-96">
    <Text progress={progress} />
    <Coin progress={progress} />
</div>

<div class="absolute bottom-12 md:bottom-8 w-full">
    <Down class="m-auto fill-white w-12 h-12" style="opacity: {Math.pow(1 - progress, 2)}" />
</div>

