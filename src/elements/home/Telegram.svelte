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
    <iframe 
        class="w-full mt-2 md:mt-3" 
        src="https://t.me/{post}?embed=1&mode=tme" 
        title="Telegram post"
    ></iframe>
    <div class="block">
        <NotButton onClick={handleJoin} className="m-auto">Join</NotButton>
    </div>
</div>
