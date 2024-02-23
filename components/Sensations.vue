<template>
  <div
      class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
    <h2 class="mx-auto mb-8 text-3xl font-semibold text-center font-grotesk">
      Comment vous sentez-vous ?
    </h2>

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

<script setup>
import {useQuizDataStore} from "~/stores/quizData.js";

const data = ref('')
const selectedSensation = ref(0)
const quizData = useQuizDataStore()

function select(data) {
  selectedSensation.value = data.id
  quizData.sensationData = data
}

const fetchSensation = async () => {
  try {
    data.value = await $fetch('http://127.0.0.1:8000/api/sensation')
  } catch (e) {
    console.log({e})
  }
}

fetchSensation()

onMounted(() => {
  if (quizData.sensationId) {
    selectedSensation.value = quizData.sensationId
  }
})
</script>