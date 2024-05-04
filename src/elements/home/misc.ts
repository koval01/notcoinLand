export const dropOpacity = (progress: number): number => {
    return .9 - Math.pow(progress, 24);
}
