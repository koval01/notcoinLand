<script lang="ts">
    export let progress: number, text: string, head: boolean = false, align: boolean = false, drop: boolean = true;
    let scale: number, opacity: number;

    import { calculateOpacity, waveOpacity, dropOpacity } from "./misc";

    const calculateScale = (progress: number): number => {
        return Math.pow(progress * 1.3, 2);
    }

    $: {
        if (!head) {
            scale = Math.pow(progress * 1.5, 2);
            opacity = waveOpacity(progress, drop);
        } else {
            scale = calculateScale(progress);
            opacity = calculateOpacity(progress, drop);
        }
    }
</script>

<div class="items-center text-center md:text-[.5rem] md:mb-16 md:text-lg text-base {align ? 'center' : 'mt-96 md:mt-64'}" style="scale: {scale}; opacity: {opacity}">
    <slot></slot>
    <h2 class="font-normal text-4xl md:text-6xl mt-4 md:mt-6 max-w-[400px] md:max-w-[600px] m-auto">
        {text}
    </h2>
</div>

<style lang="sass">
    .center
        margin: 0
        position: absolute
        top: 50%
        left: 50%
        -ms-transform: translate(-50%, -50%)
        transform: translate(-50%, -50%)

</style>
