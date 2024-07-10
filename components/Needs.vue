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
  <h2 class="mx-auto mb-2 text-3xl font-semibold font-grotesk">
    Les besoins </h2>
  <p class="mx-auto mb-8 text-center font-grotesk">
    Afin d'accueillir sereinement votre émotion, il est utile de comprendre ce qu'elle traduit comme besoin psychologique. Feelit vous en suggère quelques-uns afin de vous guider dans votre connaissance de vous-même. Sélectionnez-en un qui se rapproche de votre envie du moment !
  </p>
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
    class="w-full mt-4 mb-8 p-4 font-grotesk h-fit rounded-xl border-2 border-black cursor-pointer overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)]">
    <div class="flex justify-between cursor-pointer" @click="isOpen = !isOpen">
      <div 
      >
        Afficher la liste complète des besoins
      </div>
      <ChevronUpIcon class="w-4" v-if="isOpen"/>
      <ChevronDownIcon class="w-4" v-else/>
    </div>


    <div v-if="isOpen">
      <div class="mt-4 sm:mt-8 mr-4 sm:mr-8 mb-0 sm:mb-0 ml-4 sm:ml-8 gap-4 sm:gap-8 columns-1 sm:columns-2">
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
            <p class="p-6 text-center text-sm font-grotesk">{{ need.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
