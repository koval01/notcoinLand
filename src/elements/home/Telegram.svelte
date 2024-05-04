<script lang="ts">
    import NotButton from "../misc/NotButton.svelte";

    const handleJoin = () => {
        window.open(`https://t.me/${post.split("/")[0]}`, "_blank");

        (document.activeElement as HTMLElement).blur();
    };

    export let progress: number, post: string;
</script>

<div class="w-full px-8 mt-5" style="opacity: {Math.pow(progress + .3, 16)}">
    <script 
        async 
        src="https://telegram.org/js/telegram-widget.js?22" 
        data-telegram-post={post} 
        data-width="100%" 
        data-color="343638" 
        data-dark-color="FFFFFF"
    ></script>
    <div class="block">
        <NotButton onClick={handleJoin} className="m-auto mt-2 md:mt-4">Join</NotButton>
    </div>
</div>
