<template>
    <a :href="props.link" class="hover:opacity-30">
        <div :style="`background-color: ${props.color}`" class="rounded-3xl border-2 w-fit border-black shadow-[4px_4px_0_rgba(0,0,0,1)] px-5 py-2 flex">
            <p class="font-grotesk">{{ props.content }}</p>
            <img v-if="props.icon" :src="props.icon" class="w-5 h-5 m-auto ml-1" />
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    color: String,
    content: String,
    icon: String,
    link: String,
})
</script>