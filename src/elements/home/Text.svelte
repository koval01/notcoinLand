<script lang="ts">
    export let progress: number, text: string, head: boolean = false, align: boolean = false;
    let scale: number, opacity: number;

    const dropOpacity = (progress: number): number => {
        return .9 - Math.pow(progress, 24);
    }

    const calculateOpacity = (progress: number): number => {
        if (progress >= .9) {
            return dropOpacity(progress);
        }

        const clampedProgress = Math.min(progress, .85);
        const smoothTransition = clampedProgress / .85;

        return Math.pow(smoothTransition, 16);
    }

    const calculateScale = (progress: number): number => {
        return Math.pow(progress * 1.45, 2);
    }

    $: {
        if (!head) {
            scale = Math.pow(progress * 1, 2);
            opacity = progress >= .9 ? dropOpacity(progress) : Math.pow(progress, 8) + .3;
        } else {
            scale = calculateScale(progress);
            opacity = calculateOpacity(progress);
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
