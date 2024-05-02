<script lang="ts">
    export let progress: number;
</script>

<div class="absolute w-full mt-4" style="scale: {Math.pow(progress * 1, 2.5)}; opacity: {Math.pow(progress, 8)}">
    <div class="text-center max-w-[400px] md:max-w-[600px] m-auto">
        <h1 class="font-extrabold text-4xl md:text-6xl">Notcoin</h1>
        <h2 class="font-normal text-4xl md:text-6xl mt-4 md:mt-6">
            started with clicker game on 1 Jan
        </h2>
    </div>
</div>
