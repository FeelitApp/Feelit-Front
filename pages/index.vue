<script setup>
const route = useRoute()
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
</script>

<template>
  <div class="relative">
    <LoginCard/>
    <Container>
      <Hero/>
      <div class="container flex flex-col gap-8 px-10 pt-10 pb-12 mx-auto lg:pt-20 lg:pb-0 lg:px-40">

        <div class="flex flex-col gap-4 font-grotesk text-md lg:text-lg lg:leading-normal">
          <p>
            Inspiré de la Roue des Émotions, développée par le psychologue américain  Robert Plutchik en 1980, <strong>feelit</strong> a pour objectif de vous accompagner dans l’identification de vos émotions, afin que vous puissiez les nommer et vous les approprier.
          </p>
          <p>
            Identifier nos émotions nous permet de les accueillir plus sereinement, de dépasser les blocages et d’en faire nos alliées pour avancer.
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
              :content="'En répondant aux différentes questions posées, identifiez vos émotions et accédez à des exemples de besoins associés.'"
              :button="true"
          >
            <NuxtLink to="/quiz">
              <Button
                  :bold="true"
                  :color="'#93ECEE'"
                  :content="'Commencer'"
              />
            </NuxtLink>

          </Card>
        </div>
      </div>
      <Footer/>
  </Container>
  </div>
</template>