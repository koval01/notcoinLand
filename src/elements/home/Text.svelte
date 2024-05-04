<script lang="ts">
    export let progress: number, text: string, head: boolean = false, align: boolean = false;
    let scale: number, opacity: number;

    const calculateOpacity = (progress: number): number => {
        const clampedProgress = Math.min(progress, .9); // обмежуємо прогрес значенням .9, щоб при наближенні до 1.0, значення не перевищувало 1
        const smoothTransition = clampedProgress / .9; // розрахунок плавного переходу від 0 до 1
        return Math.pow(smoothTransition, 16); // повертаємо потужність smoothTransition
    }

    const calculateScale = (progress: number): number => {
        return Math.pow(progress * 1.45, 2);
    }

    $: {
        if (!head) {
            scale = Math.pow(progress * 1, 2);
            opacity = Math.pow(progress, 8) + .3;
        } else {
            scale = calculateScale(progress);
            opacity = calculateOpacity(progress);
        }
    }
</script>

<div class="items-center text-center md:text-[.5rem] md:mb-16 md:text-lg text-base {align ? 'center' : 'mt-72 md:mt-52'}" style="scale: {scale}; opacity: {opacity}">
    <slot></slot>
    <h2 class="font-normal text-4xl md:text-6xl mt-4 md:mt-6 max-w-[400px] md:max-w-[600px] m-auto">
        {text}
    </h2>
</div>

<style lang="sass">
    .center
        margin: 0
        position: absolute
        top: 50%
        left: 50%
        -ms-transform: translate(-50%, -50%)
        transform: translate(-50%, -50%)

</style>
