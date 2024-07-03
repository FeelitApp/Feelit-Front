<script setup>
import { api } from '@/api/client'
import { useQuizDataStore } from "~/stores/quizData.js";

const quizData = useQuizDataStore()

const data = ref('')

async function fetchNeed () {
  try {
    data.value = await api.data.getNeed()
  } catch (e) {
    console.log({e})
  }
}

const selectedNeed = ref(0)

function select(dataNeed) {
  selectedNeed.value = dataNeed.id
  quizData.needData = dataNeed
}

fetchNeed()
</script>

<template>
  <h2 class="mx-auto mb-8 text-3xl font-semibold font-grotesk">
    Les besoins </h2>
  <div
      class="gap-10 columns-1 sm:columns-2">
    <div v-for="need in data"
         class="h-fit rounded-xl border-2 border-black cursor-pointer overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] mb-10 flex-col">
      <div
          class="flex-col"
          :class="{'bg-lime':need.id === selectedNeed}"
          @click="select(need)">
        <img :src="need.picture"
             class="border-b-2 border-b-black"/>
        <p class="p-6 text-center font-grotesk">{{ need.content }}</p>
      </div>
    </div>
  </div>
</template>
