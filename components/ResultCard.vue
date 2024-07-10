<script setup>
import { api } from '@/api/client'
import { DataPostEntryInputBadRequestImpl } from '@/api/endpoint/data_post_entry'
import { useQuizDataStore } from "~/stores/quizData.js";

const router = useRouter()

const isOpen = ref(false)

const quizData = useQuizDataStore()

const comment = ref('')

const errors = ref({
  sensation: '',
  feeling: '',
  emotion: '',
  need: '',
  comment: '',
})

async function submitData () {

  const entryData = reactive({
    sensation: quizData.sensationData.id,
    feeling: quizData.feelingData.id,
    emotion: quizData.emotionData.id,
    need: quizData.needData.id,
    comment: quizData.comment,
  });

  const output = await api.data.postEntry(
      entryData.sensation,
      entryData.feeling,
      entryData.emotion,
      entryData.need,
      entryData.comment,
  )

  if (output instanceof DataPostEntryInputBadRequestImpl) {

    console.log(errors.value.comment)
    errors.value.sensation = output.sensation || '';
    errors.value.feeling = output.feeling || '';
    errors.value.emotion = output.emotion || '';
    errors.value.need = output.need || '';
    errors.value.comment = output.comment || '';
    return
  }

  isOpen.value = false;
  router.push('/dashboard');
}
</script>

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
        <div class="flex flex-col px-8 py-6 bg-light-pink rounded-xl">
          <h1 class="mb-3 text-xl font-bold text-center font-grotesk">Récapitulatif</h1>
          <p class="mx-auto mb-4 text-sm text-center font-grotesk">
            Voici le récapitulatif de votre météo émotionnelle du jour. Si vous le souhaitez, vous pouvez ajouter un commentaire personnel sur le contexte de votre introspection !
          </p>
          <p class="font-grotesk"><strong>Sensation :</strong><br/>{{ quizData.sensationData.content }}</p>
          <p class="font-grotesk"><strong>Émotion :</strong> {{ quizData.emotionData.content + ' ' + quizData.feelingData.emoji }}</p>
          <p class="font-grotesk"><strong>Besoin :</strong><br/>{{ quizData.needData.content }}</p>
          <textarea
              placeholder="Ajouter une note..."
              v-model="comment"
              class="h-24 p-2 mt-4 mb-6 text-sm border border-black font-grotesk"
          />
          <div class="flex flex-col items-center">

            <div class="text-sm font-grotesk font-bold text-[#FF7B7B] mb-3">
              <span v-if="errors.sensation">{{ errors.sensation.at(0) }}</span>
              <span v-if="errors.feeling">{{ errors.feeling.at(0) }}</span>
              <span v-if="errors.emotion">{{ errors.emotion.at(0) }}</span>
              <span v-if="errors.need">{{ errors.need.at(0) }}</span>
              <span v-if="errors.comment">{{ errors.comment.at(0) }}</span>
            </div>

            <div class="flex justify-between mb-4">
              <Button
                  :color="'#93ECEE'"
                  :content="'Retour'"
                  @click="isOpen = false"
              />
              <Button
                  @click="quizData.comment = comment ; submitData()"
                  :color="'#94ECEE'"
                  :content="'Enregistrer'"
                  class="mx-4"
              />
            </div>

            <NuxtLink to="/dashboard">
              <div class="text-sm text-gray-400 font-grotesk">Continuer sans enregistrer</div>
            </NuxtLink>
          </div>
        </div>
      </UModal>
  </div>
</template>