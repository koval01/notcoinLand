<script lang="ts">
    import { Parallax, ParallaxLayer } from 'svelte-parallax';

    import Header from "../Header.svelte";

    import Stars from "../misc/Stars.svelte";
    import Head from "./Head.svelte";
    import Coin from "./Coin.svelte";
    import Text from "./Text.svelte";

    let parallax: Parallax;
</script>

<Header />

<div class="relative">
    <Stars count={4} />

    <Parallax sections={4} bind:this={parallax} config={{stiffness: 0.2, damping: 0.3}}>
        <ParallaxLayer rate={0} offset={0}>
            <Head />
        </ParallaxLayer>
        <ParallaxLayer rate={-.45} offset={1} let:progress>
            <Coin progress={progress} />
        </ParallaxLayer>
        <ParallaxLayer rate={.5} offset={1}>
            <Text>3 months and 35 000 000 users later is was over</Text>
        </ParallaxLayer>
        <ParallaxLayer rate={.5} offset={2}>
            <Text>or not</Text>
        </ParallaxLayer>
    </Parallax>
</div>
