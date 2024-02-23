<template>
  <div class="mx-auto pb-12 my-4">
      <Button :content="'Continuer'" :color="'#CEBBFE'" @click="isOpen = true">
        <span class="text-md font-bold font-grotesk">Continuer</span>
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
        <div class="py-3 px-4">
          <p>Sensation : {{ quizData.sensationData.content }}</p>
          <p>Feeling : {{ quizData.feelingData.category + quizData.feelingData.emoji }} </p>
          <p>Emotion : {{ quizData.emotionData.content }}</p>
          <textarea
              placeholder="Ajouter une note..."
              v-model="note"
              class="border border-black"
          />
        </div>
        <button @click="isOpen = false" class="font-grotesk text-sm text-gray-400 pb-6">Fermer</button>
        <button @click="quizData.note = note" class="font-grotesk text-sm text-gray-400 pb-6">Enregistrer</button>
        <button @click="console.log(quizData.note)" class="font-grotesk text-sm text-gray-400 pb-6">Console log</button>
      </UModal>
  </div>
</template>

<script setup>
import { useQuizDataStore } from "~/stores/quizData.js";

const isOpen = ref(false)

const quizData = useQuizDataStore()
const note = ref('')

</script>