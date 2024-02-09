<template>
  <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
    <h2 class="mx-auto mb-8 text-3xl font-semibold font-grotesk text-center">
      Quelle émotion correspond le mieux à votre état ?
    </h2>

    <div v-for="feeling in dataFeelings" :key="feeling.id">
      <div class="w-full px-6 py-4 mb-6 font-grotesk">
        <div class="cursor-pointer" @click="toggle(feeling.id)">
          {{ feeling.emoji + " " + feeling.category }}
        </div>

        <div v-if="isOpen(feeling.id)">
          <div v-for="emotion in dataEmotions" :key="emotion.id">
            <div v-if="feeling.id === emotion.feeling.id">
              {{ emotion.content }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const dataFeelings = ref([]); // Remplacez avec vos données réelles
const dataEmotions = ref([]); // Remplacez avec vos données réelles

const openItems = ref({});

const toggle = (id) => {
  openItems.value[id] = !openItems.value[id];
};

const isOpen = (id) => {
  return !!openItems.value[id];
};


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