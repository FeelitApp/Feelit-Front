<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  color: String,
  content: String,
  icon: String,
  bold: Boolean,
  type: String,
})
</script>

<template>
  <button v-if="props.type === 'submit'" :style="`background-color: ${props.color}`" type="submit" class="rounded-3xl border-2 w-fit border-black shadow-[4px_4px_0_rgba(0,0,0,1)] px-5 py-2 flex hover:shadow-none hover:transform hover:translate-y-1 hover:translate-x-1 ease-in-out duration-100 cursor-pointer">
    <p :class="{ 'font-bold': props.bold }" class="font-grotesk">{{ props.content }}</p>
    <img v-if="props.icon" :src="props.icon" class="w-5 h-5 m-auto ml-1" />
  </button>

  <div v-else :style="`background-color: ${props.color}`" class="rounded-3xl border-2 w-fit border-black shadow-[4px_4px_0_rgba(0,0,0,1)] px-5 py-2 flex hover:shadow-none hover:transform hover:translate-y-1 hover:translate-x-1 ease-in-out duration-100 cursor-pointer">
    <p :class="{ 'font-bold': props.bold }" class="font-grotesk">{{ props.content }}</p>
    <img v-if="props.icon" :src="props.icon" class="w-5 h-5 m-auto ml-1" />
  </div>
</template>

