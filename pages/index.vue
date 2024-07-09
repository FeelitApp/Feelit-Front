<script setup>
definePageMeta({
  session: false,
  colorMode: 'light'
})

useHead({
  title: 'Feelit | Accueil',
  meta: [
    { name: 'description', content: 'Bienvenue sur feelit ! Inspiré de la Roue des Émotions, développée par le psychologue américain Robert Plutchik en 1980, feelit a pour objectif de vous accompagner dans l’identification de vos émotions, afin que vous puissiez les nommer et vous les approprier.' }
  ]
})

const isOpen = ref(false)

const sessionStore = useSessionStore()
</script>

<template>
  <div class="relative">
    <LoginCard/>
    <Container>
      <Hero/>
      <div class="container flex flex-col gap-8 px-10 pt-10 pb-12 mx-auto lg:pt-20 lg:pb-0 lg:px-40">

        <div class="flex flex-col gap-4 font-grotesk text-md lg:text-lg lg:leading-normal">
          <p>
            Inspiré de la Roue des Émotions développée par le psychologue américain  Robert Plutchik en 1980, <strong>feelit</strong> a pour objectif de vous accompagner dans l’identification de vos émotions, afin que vous puissiez les nommer et vous les approprier.
          </p>
          <p>
            Prenez 5 minutes pour explorer vos sensations physiques et votre état émotionnel.
            En effectuant notre test régulièrement, vous deviendrez à même de reconnaître vos émotions et d'identifier les besoins psychologiques qu'elles impliquent.
          </p>
          <p>
            Faites de vos émotions vos alliées !
          </p>
        </div>

        <div class="flex flex-col gap-8 lg:relative lg:flex-row lg:pb-10 lg:h-[20rem]">
          <div class="lg:absolute lg:top-4 lg:left-0">
            <Card
                :color="'#FACDEB'"
                :title="'Sensations'"
                :content="'Une sensation est quelque chose que l’on ressent physiquement.'"
                :button="false"
            />
          </div>
          <div class="lg:absolute lg:bottom-0 lg:left-60">
            <Card
                :color="'#CEFF1B'"
                :title="'Émotions'"
                :content="'Une émotion est une réponse brève à un stimulus extérieur. Elle ne dure pas plus de 2 minutes.'"
                :button="false"
            />
          </div>
          <div class="lg:absolute lg:top-0 lg:right-0">
            <Card
                :color="'#CEBBFE'"
                :title="'Besoins'"
                :content="'Les besoins désignent les choses à mettre en place en réponse à l’émotion ressentie.'"
                :button="false"
            />
          </div>
        </div>

        <div class="flex flex-col items-center lg:pt-20 lg:pb-2 lg:relative lg:block lg:mt-0">
          <div class="transform translate-y-8 -top-12 -left-20 w-[12rem] -rotate-12 lg:absolute g:translate-y-0">
            <Illu
                :illu="'/idris.jpg'"
            />
          </div>
          <Card
              :color="'#FFFFF'"
              :content="'En répondant aux différentes questions posées, vous allez apprendre à reconnaître vos émotions et à identifier ce dont vous avez vraiment besoin. ' +
               'Quand vous vous sentez prêt, cliquez sur le bouton pour lancer le questionnaire !'"
              :button="true"
          >
            <NuxtLink 
              v-if="sessionStore.account"
              to="/quiz">
              <Button
                  :bold="true"
                  :color="'#93ECEE'"
                  :content="'Commencer'"
              />
            </NuxtLink>
            <Button
                v-else
                @click="isOpen = true"
                :bold="true"
                :color="'#93ECEE'"
                :content="'Commencer'"
            />
          </Card>
        </div>
      </div>
      <Footer/>
  </Container>
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
    <LoginForm :from="'Start'"/>
    <button @click="isOpen = false" class="pb-6 text-sm text-gray-400 font-grotesk">Fermer</button>
  </UModal>
  </div>
</template>