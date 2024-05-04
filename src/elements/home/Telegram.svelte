<script lang="ts">
    import NotButton from "../misc/NotButton.svelte";

    import { dropOpacity } from "./misc";

    const handleJoin = () => {
        window.open(`https://t.me/${post.split("/")[0]}`, "_blank");

        (document.activeElement as HTMLElement).blur();
    };

    $: {
        if (progress >= .9) {
            opacity = dropOpacity(progress);
        } else {
            opacity = Math.pow(progress + .3, 16);
        }
    }

    let opacity: number;
    export let progress: number, post: string;
</script>

<div class="relative z-10 block px-8 mt-5" style="opacity: {opacity}">
    <div class="w-full">
        <script 
            async 
            src="https://telegram.org/js/telegram-widget.js?22" 
            data-telegram-post={post} 
            data-width="100%" 
            data-color="343638" 
            data-dark-color="FFFFFF"
        ></script>
    </div>
    <div class="block">
        <NotButton onClick={handleJoin} className="m-auto mt-2 md:mt-4">Join</NotButton>
    </div>
</div>
