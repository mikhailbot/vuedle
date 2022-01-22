<script setup>
import { defineEmits, defineProps, toRefs, reactive, watch, onMounted } from 'vue'
import { isLetter } from '../helpers'
import LetterInput from './LetterInput.vue'

const props = defineProps({
    isActive: Boolean,
    guessResults: Array
})

const state = reactive({ letters: []})

const { isActive } = toRefs(props)

const emit = defineEmits(['submitGuess'])

onMounted(() => {
    if (props.isActive == true) {
        document.addEventListener('keyup', logKey);
    }
})

function logKey(e) {
    if (isLetter(e.key) && (state.letters.length < 5)) {
        state.letters.push(e.key)
    }

    if (e.keyCode === 8) {
        state.letters.pop()
    }

    if (e.keyCode === 13 && (state.letters.length == 5)) {
        emit('submitGuess', state.letters)
    }
}

watch(isActive, (newActive) => {
    if (newActive) {
        document.addEventListener('keyup', logKey);
    } else {
        document.removeEventListener('keyup', logKey);
    }
})



</script>

<template>
    <div class="flex no-wrap my-2">
        <LetterInput :letter="state.letters[0]" :result="props.guessResults[0]" />
        <LetterInput :letter="state.letters[1]" :result="props.guessResults[1]" />
        <LetterInput :letter="state.letters[2]" :result="props.guessResults[2]" />
        <LetterInput :letter="state.letters[3]" :result="props.guessResults[3]" />
        <LetterInput :letter="state.letters[4]" :result="props.guessResults[4]" />
    </div>
</template>
