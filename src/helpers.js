import { words } from './words'

export const isLetter = (string) => {
    return string.length === 1 && string.toLowerCase().match(/[a-z]/i);
}

export const isValidWord = (string) => {
    return words.includes(string)
}
