<template>
    <div 
        :style="`background-color: ${props.color}`" 
        v-bind:class="[props.button ? 'w-[48rem] flex-row items-center pt-3 pb-3 gap-4' : 'w-64 flex-col pt-3 pb-5']"
        class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex px-6">
        <h1 class="text-3xl font-grotesk font-semibold">{{ props.title }}</h1>
        <p class="text-lg font-grotesk font-extralight leading-5">{{ props.content }}</p>
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