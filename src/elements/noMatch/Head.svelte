<script lang="ts">
    const goHome = (): void => {
        window.open("/", "_self");
    }
</script>

<div class="flex gap-1 flex-col mb-12 items-center mt-40 md:text-[.5rem] md:mb-16 md:mt-48">
    <h1 class="font-extrabold text-4xl md:text-6xl">Nothing</h1>
    <button class="text-base text-black bg-white px-1 mt-2 md:text-lg" on:click={goHome}>
        there is really nothing on this page
    </button>
</div>
