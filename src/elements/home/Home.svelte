<script lang="ts">
    import { Parallax, StickyLayer } from 'svelte-parallax';

    import Header from "../Header.svelte";

    import Stars from "../misc/Stars.svelte";
    import Head from "./head/Head.svelte";
    import Text from "./Text.svelte";

    import Telegram from './Telegram.svelte';

    import Punks from './Punks.svelte';

    let parallax: Parallax;
</script>

<Header />

<div class="relative">
    <Stars count={4} />

    <Parallax sections={9} bind:this={parallax} config={{stiffness: 1, damping: 1}}>
        <StickyLayer offset={{ top: 0, bottom: 2.5 }} let:progress>
            <Head progress={progress} />
        </StickyLayer>
        <StickyLayer offset={{ top: 1.5, bottom: 3.5 }} let:progress>
            <Text progress={progress} text="3 months and 35 000 000 users later is was over"></Text>
        </StickyLayer>
        <StickyLayer offset={{ top: 2.5, bottom: 4.5 }} let:progress>
            <Text progress={progress} text="or not"></Text>
        </StickyLayer>
        <StickyLayer offset={{ top: 3.5, bottom: 6 }} let:progress>
            <Text progress={progress} text="It was become and still is the biggest crypto community in Web3"></Text>
            <Telegram progress={progress} post="notcoin_scam/36" />
        </StickyLayer>
        <StickyLayer offset={{ top: 5, bottom: 7.5 }} let:progress>
            <Text progress={progress} text="with 234234 sqwads and 34893859239393 people"></Text>
            <Punks progress={progress} />
        </StickyLayer>
    </Parallax>
</div>
