<template>
    <div :style="`background-color: ${props.color}`" class="rounded-3xl border-2 w-fit border-black shadow-[4px_4px_0_rgba(0,0,0,1)] px-3 py-2 flex">
        <p class="font-grotesk">{{ props.content }}</p>
        <img :src="props.icon" class="pl-2" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    color: {
        type: String,
    },
    content: {
        type: String,
    },
    icon: {
        type: String,
    },
})
</script>