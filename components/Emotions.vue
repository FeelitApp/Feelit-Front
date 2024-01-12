<template>
  <div
      class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
    <h2 class="font-grotesk font-semibold text-3xl mx-auto mb-8">
      Quelle émotion correspond le mieux à votre état ?
    </h2>

    <div v-for="feeling in dataFeelings">
      <div :id="feeling.id" class="px-6 py-4 w-full font-grotesk mb-6">
        <div class="text-center">{{ feeling.emoji + " " + feeling.category }}</div>
        <div v-for="emotion in dataEmotions">
          <div v-if="feeling.id === emotion.feeling.id">{{ emotion.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataFeelings = ref('')
const dataEmotions = ref('')

const fetchFeeling = async () => {
  try {
    dataFeelings.value = await $fetch('http://127.0.0.1:8000/api/feeling')
    console.log(dataFeelings.value)
  } catch (e) {
    console.log({e})
  }
}

const fetchEmotion = async () => {
  try {
    dataEmotions.value = await $fetch('http://127.0.0.1:8000/api/emotion')
    console.log(dataEmotions.value)
  } catch (e) {
    console.log({e})
  }
}

fetchFeeling()
fetchEmotion()
</script>