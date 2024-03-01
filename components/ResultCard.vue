<template>
  <div class="pb-12 mx-auto my-4">
      <Button :content="'Continuer'" :color="'#CEBBFE'" @click="isOpen = true">
        <span class="font-bold text-md font-grotesk">Continuer</span>
      </Button>

      <UModal v-model="isOpen"
        :ui="{
          overlay: {
            background: 'bg-gray-700/75'
          },
          rounded: 'rounded-xl',
          shadow: 'shadow-[4px_4px_0_rgba(0,0,0,1)]',
          base: 'border-black border-2',
          container: 'flex items-center'
        }"
      >
        <div class="px-4 py-3">
          <p>Sensation : {{ quizData.sensationData.content }}</p>
          <p>Feeling : {{ quizData.feelingData.category + quizData.feelingData.emoji }} </p>
          <p>Emotion : {{ quizData.emotionData.content }}</p>
          <textarea
              placeholder="Ajouter une note..."
              v-model="note"
              class="border border-black"
          />
        </div>
        <button @click="quizData.note = note" class="pb-6 text-sm text-gray-400 font-grotesk">Enregistrer</button>
        <button @click="isOpen = false" class="pb-6 text-sm text-gray-400 font-grotesk">Continuer sans enregistrer</button>
      </UModal>
  </div>
</template>

<script setup>
import { useQuizDataStore } from "~/stores/quizData.js";

const isOpen = ref(false)

const quizData = useQuizDataStore()
const note = ref('')

</script>