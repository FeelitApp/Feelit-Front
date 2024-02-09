<template>
  <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
    <h2 class="mx-auto mb-8 text-3xl font-semibold font-grotesk text-center">
      Quelle émotion correspond<br/>le mieux à votre état ?
    </h2>

    <div v-for="feeling in dataFeelings" :key="feeling.id">
      <div class="w-full px-6 py-4 mb-0 font-grotesk">
        <div class="flex justify-between cursor-pointer" @click="toggle(feeling.id)">
          <div class="text-lg font-bold mb-4 whitespace-break-spaces" >
            {{ feeling.emoji + "  " + feeling.category }}
          </div>
          <ChevronUpIcon class="w-4" v-if="isOpen(feeling.id)"/>
          <ChevronDownIcon class="w-4" v-else/>
        </div>


        <div v-if="isOpen(feeling.id)">
          <div v-for="emotion in dataEmotions" :key="emotion.id">
            <div
                v-if="feeling.id === emotion.feeling.id"
                class="bg-light-pink rounded-xl border-2 border-black px-6 py-2 w-full font-grotesk text-center mb-4 cursor-pointer"
                :class="{'bg-lime':emotion.id === selectedEmotion}"
                @click="select(emotion.id)"
            >
              {{ emotion.content }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import {useQuizDataStore} from "~/stores/quizData.js";

const dataFeelings = ref([]);
const dataEmotions = ref([]);

const openItems = ref({});

const quizData = useQuizDataStore()
console.log(quizData.sensationId)

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

const selectedEmotion = ref(0)

function select(id) {
  selectedEmotion.value = id
}

fetchFeeling()
fetchEmotion()
</script>