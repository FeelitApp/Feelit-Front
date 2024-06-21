<template>
  <div>
    <Container>
      <Hero/>
      <div class="container flex flex-col px-10 pt-10 mx-auto lg:pt-20 lg:pb-0 lg:px-40">
        <Sensations v-if="currentStep === 1"/>
        <Emotions v-if="currentStep === 2"/>
        <Needs v-if="currentStep === 3"/>
        <div class="flex justify-between">
          <NuxtLink
              class="pb-12 mx-auto my-4"
              :class="{'hidden': currentStep === 1}"
              @click="previousStep">
            <Button
                :color="'#93ECEE'"
                :content="'Retour'"
            />
          </NuxtLink>
          <NuxtLink
              class="pb-12 mx-auto my-4"
              :class="{'hidden': currentStep === 3}"
              @click="nextStep">
            <Button
                :color="'#93ECEE'"
                :content="'Suivant'"
            />
          </NuxtLink>
          <ResultCard
              :class="{'hidden': currentStep !== 3}"/>
        </div>
      </div>

      <Footer/>
    </Container>

  </div>
</template>

<script setup>
import {ref} from 'vue';
import ResultCard from "~/components/ResultCard.vue";

definePageMeta({colorMode: 'light'});
useHead({
  title: 'Feelit | Questionnaire',
  meta: [
    {
      name: 'description',
      content: 'Répondez au questionnaire pour parvenir à identifier et affiner vos émotions.'
    }
  ]
});

const currentStep = ref(1);

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value += 1;
  }
}

function previousStep() {
  currentStep.value -= 1;
}
</script>