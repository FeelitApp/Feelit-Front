<template>
  <div>
    <Container>
      <Hero/>
      <div class="container flex flex-col gap-8 px-10 pt-10 pb-12 mx-auto lg:pt-20 lg:pb-0 lg:px-40">
        <h1 class="text-2xl font-medium font-grotesk sm:text-3xl">Glossaire 📚</h1>

        <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
          <h2 class="font-medium font-grotesk font-xl">
            Les émotions :
          </h2>
          <p class="mb-3 whitespace-pre-line font-grotesk">
            On retrouve dans toutes les littératures quatre émotions primaires, qui sont la colère, la joie, la peur et la tristesse. Elles sont universelles et souvent liées à des événements ou des situations spécifiques.
          </p>
          <p class="whitespace-pre-line font-grotesk">
            À celles-ci peuvent s’ajouter d’autres émotions, parallèles ou plus précises, comme le dégoût, la honte, la surprise, la confiance, etc. Toutes ces émotions peuvent être ressenties à des degrés divers en fonction de la situation vécue.
          </p>
          <ul class="flex flex-row flex-wrap justify-center gap-8 mx-auto my-5 text-4xl">
            <li>😡</li>
            <li>😄</li>
            <li>😨</li>
            <li>😢</li>
            <li>🤢</li>
            <li>🫣</li>
          </ul>
          <p class="mb-3 whitespace-pre-line font-grotesk">
            Il n’y a pas d’émotions positives ou négatives. Chacune des émotions que l’on ressent possède sa fonction propre. La peur, par exemple, nous signale les dangers ou les menaces. La tristesse quant à elle nous permet d’accepter ce qui ne peut être changé, c’est une réaction face à une perte.
          </p>
          <p class="mb-3 whitespace-pre-line font-grotesk">
            Par quelles étapes passer pour accueillir ses émotions ?
          </p>
          <div class="hidden sm:block sm:mx-auto">
            <img src="/glossaire_etapes.svg" class="my-2"/>
          </div>
          <div class="block mx-auto sm:hidden">
            <img src="/glossaire_etapes_mobile.svg" class="my-3"/>
          </div>
        </div>

        <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
          <h2 class="font-medium font-grotesk font-xl">
            Quelles différences entre une sensation, une émotion et un sentiment ?
          </h2>
          <p class="mb-3 font-grotesk">
            Une <span class="bg-blue">sensation</span> est quelque chose que l’on ressent physiquement. Cela peut-être la respiration saccadée, le coeur qui bat plus vite ou plus lentement, la gorge serrée, etc.
          </p>
          <p class="mb-3 font-grotesk">
            Les <span class="bg-lime">émotions</span> sont quant à elles des réponses brèves à des stimuli extérieurs. Ce sont des réponses physiologiques, expressions faciales, qui apparaissent dans l’instant et ne durent que quelques minutes. On peut être heureux, en colère, avoir peur, etc.
          </p>
          <p class="mb-3 font-grotesk">
            Les <span class="bg-purple">sentiments</span> interviennent dans un temps plus long, après le stimulus. Ils sont une réaction, une verbalisation qui fait suite à un événement, sur une durée plus ou moins longue. On peut par exemple nourrir de la rancoeur vis-à-vis que quelque chose a posteriori, et s’en vouloir de n’avoir rien dit.
          </p>
          <p class="mb-3 font-grotesk">
            Aussi, les sentiments sont généralement dirigés vers un élément précis (une personne, une situation, etc.), tandis qu’une émotion peut ne pas avoir d’objet bien défini.
          </p>
        </div>

        <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12">
          <h2 class="font-medium font-grotesk font-xl">
            L’intelligence émotionnelle :
          </h2>
          <p class="mb-3 font-grotesk">
            Elle se définit par la capacité pour un individu à percevoir, comprendre, maîtriser et exprimer une émotion qui lui est propre et à distinguer et décoder une émotion chez l’autre. Cette forme d’intelligence va au-delà des capacités cognitives et intellectuelles traditionnelles.
          </p>
          <p class="font-grotesk">
            Globalement, une intelligence émotionnelle forte permet de :
          </p>
          <ul class="mb-3 ml-8 list-disc font-grotesk">
            <li>mieux interagir avec les autres,</li>
            <li>éviter les conflits,</li>
            <li>créer des liens de meilleure qualité,</li>
            <li>développer des relations plus facilement via l’écoute et la compréhension.</li>
          </ul>
          <p class="mb-8 font-grotesk">
            L’intelligence émotionnelle est basée sur cinq composantes :
          </p>

          <div class="mb-8 space-y-8 text-center sm:grid sm:grid-cols-3 font-grotesk gap-11 sm:text-left sm:space-y-0">
            <div>
              <div class="flex"><h2 class="mx-auto sm:mx-0"><span class="font-bold bg-pink w-fit whitespace-break-spaces">Conscience </span><span class="font-bold bg-pink w-fit">de soi</span></h2></div>
              Connaître et percevoir ses émotions
            </div>
            <div>
              <h2 class="mx-auto font-bold sm:mx-0 bg-blue w-fit">Autorégulation</h2>
              Accueillir et gérer ses émotions
            </div>
            <div>
              <div class="flex"><h2 class="mx-auto sm:mx-0"><span class="font-bold bg-purple w-fit whitespace-break-spaces">Motivation </span><span class="font-bold bg-purple w-fit">personnelle</span></h2></div>
              Mobiliser ses émotions au service de ses objectifs
            </div>
          </div>

          <div class="w-3/5 mx-auto mb-3 space-y-8 text-center sm:grid sm:grid-cols-2 font-grotesk gap-11 sm:text-left sm:space-y-0">
            <div>
              <h2 class="mx-auto font-bold sm:mx-0 bg-lime w-fit">Empathie</h2>
              Reconnaître les émotions des autres
            </div>
            <div>
              <div class="flex"><h2 class="mx-auto sm:mx-0">
                <span class="font-bold bg-pink w-fit whitespace-break-spaces">Compétence </span>
                <span class="font-bold bg-pink w-fit">sociale</span></h2></div>
              Gérer les émotions des autres
            </div>
          </div>

        </div>

      </div>
      <Footer/>
    </Container>
  </div>
</template>

<script setup>
definePageMeta({
  session: false,
  colorMode: 'light'
})
</script>