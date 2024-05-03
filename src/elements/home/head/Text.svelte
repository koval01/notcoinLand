<script lang="ts">
    import Text from "../Text.svelte";

    export let progress: number;
</script>

<Text progress={progress} text="started with clicker game on 1 Jan" head={true}>
    <h1 class="font-extrabold text-4xl md:text-6xl">Notcoin</h1>
</Text>
