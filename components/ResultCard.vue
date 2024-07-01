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
        <div class="flex flex-col px-8 py-6 bg-light-pink">
          <h1 class="mb-4 text-xl font-bold text-center font-grotesk">Récapitulatif</h1>
          <p class="font-grotesk"><strong>Sensation :</strong><br/>{{ quizData.sensationData.content }}</p>
          <p class="font-grotesk"><strong>Émotion :</strong> {{ quizData.emotionData.content + ' ' + quizData.feelingData.emoji }}</p>
          <textarea
              placeholder="Ajouter une note..."
              v-model="note"
              class="h-24 p-2 mt-4 mb-8 text-sm border border-black font-grotesk"
          />
          <div class="flex flex-col items-center">
            <Button
                @click="quizData.note = note ; isOpen = false ; submitData()"
                :color="'#94ECEE'"
                :content="'Enregistrer'"
                class="mb-4"
            />
            <button @click="isOpen = false" class="text-sm text-gray-400 font-grotesk">Continuer sans enregistrer</button>
          </div>
        </div>
      </UModal>
  </div>
</template>

<script setup>
import { useQuizDataStore } from "~/stores/quizData.js";

const isOpen = ref(false)

const quizData = useQuizDataStore()

const config = useRuntimeConfig()
const apiBase = config.public.apiBase
const note = ref('')

const submitData = async () => {

  const resultData = new FormData();
  resultData.append('date', new Date());
  resultData.append('sensationId', quizData.sensationData.id);
  resultData.append('feelingId', quizData.feelingData.id);
  resultData.append('emotionId', quizData.emotionData.id);
  resultData.append('note', quizData.note);

  try {
    await $fetch('results', {
      method: 'POST',
      baseURL: apiBase,
      body: resultData
    });

  } catch (error) {
    console.log("ma bite");
  }

}
</script>