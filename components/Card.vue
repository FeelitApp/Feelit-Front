<template>
    <div 
        :style="`background-color: ${props.color}`" 
        v-bind:class="[props.button ? 'w-full flex-col lg:flex-row items-center lg:pt-3 lg:pb-3 gap-4' : 'w-full lg:w-72 flex-col']"
        class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex px-6 lg:px-8 py-6 lg:py-8">
        <h1 class="text-xl font-medium lg:text-3xl font-grotesk">{{ props.title }}</h1>
        <p class="text-md lg:text-lg font-grotesk font-extralight leading-5"
        v-bind:class="[props.title ? '' : 'pt-8 lg:py-8']">{{ props.content }}</p>
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