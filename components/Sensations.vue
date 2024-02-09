<template>
  <div
      class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
    <h2 class="font-grotesk font-semibold text-3xl mx-auto mb-8 text-center">
      Comment vous sentez-vous ?
    </h2>

    <div v-for="sensation in data">
      <ul
          :id="sensation.id"
          class="bg-light-pink rounded-xl border-2 border-black px-6 py-4 w-full font-grotesk mb-4 cursor-pointer"
          :class="{'bg-lime':sensation.id === selectedSensation}"
          @click="select(sensation.id)"
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

function select(id) {
  selectedSensation.value = id
  quizData.sensationId = id
}

const fetchSensation = async () => {
  try {
    data.value = await $fetch('http://127.0.0.1:8000/api/sensation')
    console.log(data.value)
  } catch (e) {
    console.log({e})
  }
}

fetchSensation()
</script>