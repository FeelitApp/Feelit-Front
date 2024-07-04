<script setup>
import { api } from '@/api/client'
import { useQuizDataStore } from "~/stores/quizData.js";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline';
import { ref, watch } from 'vue';

const quizData = useQuizDataStore()
const needs = ref([])
const firstNeeds = ref([])
const otherNeeds = ref([])

const isOpen = ref(false)

async function fetchNeed () {
  try {
    needs.value = await api.data.getNeed()
  } catch (e) {
    console.log({e})
  }
}

const selectedNeed = ref(0)

function select(dataNeed) {
  selectedNeed.value = dataNeed.id
  quizData.needData = dataNeed
}

useAsyncData('fetchNeeds', fetchNeed)

watch(needs, (newNeeds) => {
  if (newNeeds && newNeeds.length > 0 && quizData.feelingData && quizData.feelingData.id) {
    const feelingId = quizData.feelingData.id
    firstNeeds.value = newNeeds.filter(need => need.feeling.some(f => f.id === feelingId))
    otherNeeds.value = newNeeds.filter(need => !need.feeling.some(f => f.id === feelingId))
  }
})
</script>


<template>
  <h2 class="mx-auto mb-8 text-3xl font-semibold font-grotesk">
    Les besoins </h2>
  <div class="gap-10 columns-1 sm:columns-2">
    <div 
      v-for="need in firstNeeds"
      class="h-fit rounded-xl border-2 border-black cursor-pointer overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] mb-10 flex-col"
    >
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
  <div
    class="w-full my-6 font-grotesk">
    <div class="flex justify-between cursor-pointer" @click="isOpen = !isOpen">
      <div 
        class="mb-4 text-lg whitespace-break-spaces"
      >
        Afficher la liste complète des besoins
      </div>
      <ChevronUpIcon class="w-4" v-if="isOpen"/>
      <ChevronDownIcon class="w-4" v-else/>
    </div>


    <div v-if="isOpen">
      <div class="gap-10 columns-1 sm:columns-2">
        <div 
          class="h-fit rounded-xl border-2 border-black cursor-pointer overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] mb-10 flex-col"
          v-for="need in otherNeeds"
        >
          <div
            class="flex-col"
            :class="{'bg-lime':need.id === selectedNeed}"
            @click="select(need)"
          >
            <img :src="need.picture"
                class="border-b-2 border-b-black"/>
            <p class="p-6 text-center font-grotesk">{{ need.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
