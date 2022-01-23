<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    letter: String,
    result: Number
})

const resultStyle = computed(() => {
    switch (props.result) {
        case 1:
            return 'bg-gray-600'
        case 2:
            return 'bg-yellow-600'
        case 3:
            return 'bg-green-600'
        default:
            return 'bg-gray-100'
    }
})
</script>

<template>
    <div class="flex w-12 h-12 text-center align-middle uppercase p-4 border-2 border-gray-300 mx-1"
        :class="resultStyle">
        <span class="self-center justify-self-center font-semibold text-xl">{{ props.letter }}</span>
    </div>
</template>
