<script lang="ts">
    const coinProgress = (progress, steps = 128) => {
        const step = Math.floor(progress * steps);
        const clampedStep = Math.max(0, Math.min(steps - 1, step));
        return clampedStep;
    }

    const scaleDown = (progress) => {
        return progress >= .8 ? 1 - (progress - .8) / .1 : 1
    }

    $: {
        image = `/images/coin/${coinProgress(progress)}.webp`
    }

    export let progress: number, image: string;
</script>

<img 
    class="m-auto w-28 max-w-[260px] md:w-48 transition-all" 
    style="scale: {Math.pow(progress * 2.5, 5)}; opacity: {scaleDown(progress)}" 
    src={image} 
    alt="coin" draggable="false" />
