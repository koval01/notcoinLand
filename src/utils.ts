export const getRandomElements = <T>(list: T[], count: number): T[] => {
    const shuffled = list.sort(() => .5 - Math.random());
    return shuffled.slice(0, count);
}

export const getRandomRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getAvatarThumb = (): string => {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${getRandomRange(1, 1e2)}`;
}

export const generateStars = (count = 4) => {
    const starsLeft = [];
    const starsRight = [];

    const randomValues = [];
    for (let i = 0; i < count * 2; i++) {
        randomValues.push({
            size: Math.random() < .8 ? "small" : ["medium", "large", "xlarge"][Math.floor(Math.random() * 3)],
            top: `${Math.round(Math.random() * 24 + 2)}rem`,
            offset: `${Math.round(Math.random() * 24 + 2)}rem`
        });
    }

    for (let i = 0; i < count; i++) {
        starsLeft.push(randomValues[i]);
        starsRight.push(randomValues[i + count]);
    }

    return { starsLeft, starsRight };
}

export const handleImageError = (event: Event): void => {
    const target = event.target as HTMLImageElement;
    if (target) target.src = getAvatarThumb();
}
