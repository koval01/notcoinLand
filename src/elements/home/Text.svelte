<script lang="ts">
    export let progress: number;
</script>

<div 
    class="items-center text-center mt-96 md:text-[.5rem] md:mb-16 md:mt-72 md:text-lg text-base" 
    style="scale: {Math.pow(progress * 1, 2)}; opacity: {Math.pow(progress, 8) + .3}"
    >
    <h2 class="font-normal text-4xl md:text-6xl mt-4 md:mt-6 max-w-[400px] md:max-w-[600px] m-auto">
        <slot></slot>
    </h2>
</div>
