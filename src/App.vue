<template>
  <div class="m-8">
    <WordInput :is-active="state.activeGuess == 0" @submit-guess="submitGuess" :guess-results="state.guessResults[0]"/>
    <WordInput :is-active="state.activeGuess == 1" @submit-guess="submitGuess" :guess-results="state.guessResults[1]"/>
    <WordInput :is-active="state.activeGuess == 2" @submit-guess="submitGuess" :guess-results="state.guessResults[2]"/>
    <WordInput :is-active="state.activeGuess == 3" @submit-guess="submitGuess" :guess-results="state.guessResults[3]"/>
    <WordInput :is-active="state.activeGuess == 4" @submit-guess="submitGuess" :guess-results="state.guessResults[4]"/>
    <WordInput :is-active="state.activeGuess == 5" @submit-guess="submitGuess" :guess-results="state.guessResults[5]"/>

    <p class="py-8">Lazy debug: {{ state.word }}</p>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import WordInput from './components/WordInput.vue'
import { getRandomWord } from './words'

const state = reactive({
  activeGuess: 0,
  word: '',
  guessResults: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
})

onMounted(() => {
  state.word = getRandomWord()
})

function submitGuess(letterArray) {
  const wordArray = state.word.split('')

  state.guessResults[state.activeGuess] = letterArray.map((letter, i) => {
    if (letter.toLowerCase() === wordArray[i]) {
      return 3
    } else if (wordArray.includes(letter)) {
      return 2
    } else {
      return 1
    }
  });

  state.activeGuess += 1
}
</script>

<style>
</style>
