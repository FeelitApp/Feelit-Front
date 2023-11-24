<template>
    <div 
        :style="`background-color: ${props.color}`" 
        v-bind:class="[props.button ? 'w-full flex-row items-center pt-3 pb-3 gap-4' : 'w-72 flex-col']"
        class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex px-8 py-8">
        <h1 class="text-3xl font-grotesk font-semibold">{{ props.title }}</h1>
        <p class="text-lg font-grotesk font-extralight leading-5"
        v-bind:class="[props.title ? '' : 'py-8']">{{ props.content }}</p>
        <slot />
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
    },
    button: {
        type: Boolean,
    }
})
</script>