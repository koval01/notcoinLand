export const dropOpacity = (progress: number): number => {
    return .9 - Math.pow(progress, 24);
}

export const calculateOpacity = (progress: number, drop: boolean): number => {
    if (progress >= .9 && drop) {
        return dropOpacity(progress);
    }

    const clampedProgress = Math.min(progress, .9);
    const smoothTransition = clampedProgress / .9;

    return Math.pow(smoothTransition, 16);
}

export const waveOpacity = (progress: number, drop: boolean): number => {
    return progress >= .9 && drop ? dropOpacity(progress) : Math.pow(progress, 8) + .3;
}
