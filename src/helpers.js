export const isLetter = (string) => {
    return string.length === 1 && string.toLowerCase().match(/[a-z]/i);
}
