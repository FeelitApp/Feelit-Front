<template>
  <div>
    <Container>
      <Hero/>
      <div class="container flex flex-col px-10 pt-10 mx-auto lg:pt-20 lg:pb-0 lg:px-40">
          <Sensations v-if="currentStep === 1"/>
          <Emotions v-if="currentStep === 2"/>
          <Needs v-if="currentStep === 3"/>
        <NuxtLink class="mx-auto pb-12 my-4" @click="nextStep">
          <Button
              :color="'#93ECEE'"
              :content="'Suivant'"
          />
        </NuxtLink>
      </div>

      <Footer/>
    </Container>

  </div>
</template>

<script setup>
import { ref } from 'vue';
definePageMeta({ colorMode: 'light' });

const currentStep = ref(1);

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value += 1;
  }
}
</script>