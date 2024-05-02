<script lang="ts">
    const coinProgress = (progress, steps = 4) => {
        const step = Math.floor(progress * steps);
        const clampedStep = Math.max(0, Math.min(steps - 1, step));
        return clampedStep;
    }

    export let progress: number;
</script>

<img 
    class="m-auto w-28 max-w-[260px] md:w-48 transition-all" 
    style="scale: {Math.pow(progress * 2.5, 2)}" 
    src={`/images/coin/${coinProgress(progress)}.webp`} 
    alt="coin" draggable="false" />
