<template>
    <div :style="`background-color: ${props.color}`" class="rounded-xl border-2 border-black w-64 overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] pt-3 pb-5 px-6">
        <h1 class="text-3xl font-grotesk font-semibold">{{ props.title }}</h1>
        <p class="text-lg font-grotesk font-extralight leading-5">{{ props.content }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    color: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    }
})
</script>