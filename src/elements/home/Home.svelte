<script lang="ts">
    import { Parallax, StickyLayer } from 'svelte-parallax';

    import Header from "../Header.svelte";

    import Stars from "../misc/Stars.svelte";
    import Head from "./head/Head.svelte";
    import Text from "./Text.svelte";

    let parallax: Parallax;
</script>

<Header />

<div class="relative">
    <Stars count={4} />

    <Parallax sections={5} bind:this={parallax} config={{stiffness: .2, damping: .3}}>
        <StickyLayer offset={{ top: 0, bottom: 2 }} let:progress>
            <Head progress={progress} />
        </StickyLayer>
        <StickyLayer offset={{ top: 2.5, bottom: 3 }} let:progress>
            <Text progress={progress}>3 months and 35 000 000 users later is was over</Text>
        </StickyLayer>
        <StickyLayer offset={{ top: 3, bottom: 4 }} let:progress>
            <Text progress={progress}>or not</Text>
        </StickyLayer>
    </Parallax>
</div>
