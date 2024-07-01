<script setup>
import { api } from '@/api/client'

const data = ref('')

async function fetchNeed () {
  try {
    data.value = await api.data.getNeed()
  } catch (e) {
    console.log({e})
  }
}

fetchNeed()
</script>

<template>
  <h2 class="mx-auto mb-8 text-3xl font-semibold font-grotesk">
    Les besoins </h2>
  <div
      class="gap-10 columns-1 sm:columns-2">
    <div v-for="need in data"
         class="h-fit rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex-col mb-10">
      <img :src="need.picture"
           class="border-b-2 border-b-black"/>
      <p class="m-6 text-center font-grotesk">{{ need.content }}</p>
    </div>
  </div>
</template>
