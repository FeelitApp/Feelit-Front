<script setup>
import {useQuizDataStore} from "~/stores/quizData.js";
import { api } from '@/api/client'

const data = ref('')
const selectedSensation = ref(0)
const quizData = useQuizDataStore()

function select(data) {
  selectedSensation.value = data.id
  quizData.sensationData = data
}

async function fetchSensation () {
  try {
    data.value = await api.data.getSensation()
  } catch (e) {
    console.log({e})
  }
}

fetchSensation()

onMounted(() => {
  if (quizData.sensationData) {
    selectedSensation.value = quizData.sensationData.id
  }
})
</script>

<template>
  <div
      class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
    <h2 class="mx-auto mb-2 text-3xl font-semibold text-center font-grotesk">
      Comment vous sentez-vous ?
    </h2>
    <p class="mx-auto mb-8 text-center font-grotesk">
      Inspirez... Soufflez. Portez votre attention sur vos sensations physiques. Parmi les options proposées ci-dessous, quelle est celle qui se rapproche le plus de ce que vous vivez en cet instant ?
    </p>

    <div v-for="sensation in data">
      <ul
          :id="sensation.id"
          class="w-full px-6 py-4 mb-4 border-2 border-black cursor-pointer bg-light-pink rounded-xl font-grotesk"
          :class="{'bg-lime':sensation.id === selectedSensation}"
          @click="select(sensation)"
      >
        <li class="text-center">{{ sensation.content }}</li>
      </ul>
    </div>

  </div>
</template>