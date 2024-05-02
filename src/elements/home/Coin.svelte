<script lang="ts">
    const coinProgress = (progress, steps = 3, startPoint = .8, endPoint = .5) => {
        const range = startPoint - endPoint;
        const adjustedProgress = (startPoint - progress) / range;
        let step = Math.floor(adjustedProgress * steps);
        step = Math.max(0, Math.min(steps - 1, step));
        return step;
    }

    export let progress: number;
</script>

<div class="block">
    <img class="m-auto w-52 max-w-[320px] md:w-72 transition-all" style="scale: {progress/.5}" src={`/images/coin/${coinProgress(progress)}.webp`} alt="coin" draggable="false" />
</div>
