<template>
  <div>
    <Container>
      <Hero/>
      <div class="container flex flex-col px-10 pt-10 pb-12 mx-auto gap-8 lg:pt-20 lg:pb-0 lg:px-40">
        <h1 class="font-grotesk font-medium text-2xl sm:text-3xl">Glossaire 📚</h1>

        <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12 lg:mb-12">
          <h2 class="font-grotesk font-medium font-xl">
            Les émotions :
          </h2>
          <p class="font-grotesk whitespace-pre-line mb-3">
            On retrouve dans toutes les littératures quatre émotions primaires, qui sont la colère, la joie, la peur et la tristesse. Elles sont universelles et souvent liées à des événements ou des situations spécifiques.
          </p>
          <p class="font-grotesk whitespace-pre-line">
            À celles-ci peuvent s’ajouter d’autres émotions, parallèles ou plus précises, comme le dégoût, la honte, la surprise, la confiance, etc. Toutes ces émotions peuvent être ressenties à des degrés divers en fonction de la situation vécue.
          </p>
          <ul class="text-4xl mx-auto my-5 flex flex-row flex-wrap gap-8 justify-center">
            <li>😡</li>
            <li>😄</li>
            <li>😨</li>
            <li>😢</li>
            <li>🤢</li>
            <li>🫣</li>
          </ul>
          <p class="font-grotesk whitespace-pre-line mb-3">
            Il n’y a pas d’émotions positives ou négatives. Chacune des émotions que l’on ressent possède sa fonction propre. La peur, par exemple, nous signale les dangers ou les menaces. La tristesse quant à elle nous permet d’accepter ce qui ne peut être changé, c’est une réaction face à une perte.
          </p>
          <p class="font-grotesk whitespace-pre-line mb-3">
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
          <h2 class="font-grotesk font-medium font-xl">
            Quelles différences entre une sensation, une émotion et un sentiment ?
          </h2>
          <p class="font-grotesk mb-3">
            Une <span class="bg-blue">sensation</span> est quelque chose que l’on ressent physiquement. Cela peut-être la respiration saccadée, le coeur qui bat plus vite ou plus lentement, la gorge serrée, etc.
          </p>
          <p class="font-grotesk mb-3">
            Les <span class="bg-lime">émotions</span> sont quant à elles des réponses brèves à des stimuli extérieurs. Ce sont des réponses physiologiques, expressions faciales, qui apparaissent dans l’instant et ne durent que quelques minutes. On peut être heureux, en colère, avoir peur, etc.
          </p>
          <p class="font-grotesk mb-3">
            Les <span class="bg-purple">sentiments</span> interviennent dans un temps plus long, après le stimulus. Ils sont une réaction, une verbalisation qui fait suite à un événement, sur une durée plus ou moins longue. On peut par exemple nourrir de la rancoeur vis-à-vis que quelque chose a posteriori, et s’en vouloir de n’avoir rien dit.
          </p>
          <p class="font-grotesk mb-3">
            Aussi, les sentiments sont généralement dirigés vers un élément précis (une personne, une situation, etc.), tandis qu’une émotion peut ne pas avoir d’objet bien défini.
          </p>
        </div>

        <div class="rounded-xl border-0 sm:border-2 sm:border-black overflow-hidden shadow-none sm:shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col sm:px-12 sm:py-12">
          <h2 class="font-grotesk font-medium font-xl">
            L’intelligence émotionnelle :
          </h2>
          <p class="font-grotesk mb-3">
            Elle se définit par la capacité pour un individu à percevoir, comprendre, maîtriser et exprimer une émotion qui lui est propre et à distinguer et décoder une émotion chez l’autre. Cette forme d’intelligence va au-delà des capacités cognitives et intellectuelles traditionnelles.
          </p>
          <p class="font-grotesk">
            Globalement, une intelligence émotionnelle forte permet de :
          </p>
          <ul class="ml-8 font-grotesk mb-3 list-disc">
            <li>mieux interagir avec les autres,</li>
            <li>éviter les conflits,</li>
            <li>créer des liens de meilleure qualité,</li>
            <li>développer des relations plus facilement via l’écoute et la compréhension.</li>
          </ul>
          <p class="font-grotesk mb-8">
            L’intelligence émotionnelle est basée sur cinq composantes :
          </p>

          <div class="sm:grid sm:grid-cols-3 font-grotesk gap-11 mb-8 text-center sm:text-left space-y-8 sm:space-y-0">
            <div>
              <div class="flex"><h2 class="mx-auto sm:mx-0"><span class="bg-pink w-fit font-bold whitespace-break-spaces">Conscience </span><span class="bg-pink w-fit font-bold">de soi</span></h2></div>
              Connaître et percevoir ses émotions
            </div>
            <div>
              <h2 class="mx-auto sm:mx-0 bg-blue w-fit font-bold">Autorégulation</h2>
              Accueillir et gérer ses émotions
            </div>
            <div>
              <div class="flex"><h2 class="mx-auto sm:mx-0"><span class="bg-purple w-fit font-bold whitespace-break-spaces">Motivation </span><span class="bg-purple w-fit font-bold">personnelle</span></h2></div>
              Mobiliser ses émotions au service de ses objectifs
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-2 mb-3 w-3/5 font-grotesk gap-11 mx-auto text-center sm:text-left space-y-8 sm:space-y-0">
            <div>
              <h2 class="mx-auto sm:mx-0 bg-lime w-fit font-bold">Empathie</h2>
              Reconnaître les émotions des autres
            </div>
            <div>
              <div class="flex"><h2 class="mx-auto sm:mx-0">
                <span class="bg-pink w-fit font-bold whitespace-break-spaces">Compétence </span>
                <span class="bg-pink w-fit font-bold">sociale</span></h2></div>
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
definePageMeta({colorMode: 'light'});
useHead({
  title: 'Feelit | Glossaire',
  meta: [
    {
      name: 'description',
      content: 'Ce glossaire a pour but de vous apportez des informations pratiques, des définitions, etc. pour vous aider à mieux identifier vos émotions.'
    }
  ]
})
</script>