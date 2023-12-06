<script setup>
const route = useRoute()
definePageMeta({colorMode: 'light'})
</script>

<template>
  <div class="relative">
    <LoginCard/>
    <Container>
      <Hero/>
      <div class="container flex flex-col px-10 pt-10 pb-12 mx-auto gap-8 lg:pt-20 lg:pb-0 lg:px-40">

        <div class="flex flex-col gap-4 font-grotesk text-md lg:text-lg lg:leading-normal">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh lacus, vehicula vitae aliquet ut,
            gravida sed tortor. Aliquam convallis porta tincidunt. In hendrerit ligula a lorem rutrum hendrerit. Morbi
            eleifend lacinia enim.
          </p>
          <p>
            Nunc sollicitudin facilisis tellus. In eu odio at massa semper dignissim. Nulla facilisi. Aliquam et mollis
            mauris. Maecenas laoreet lacinia lacus pharetra bibendum.
          </p>
        </div>

        <div class="flex flex-col gap-8 lg:relative lg:flex-row lg:pb-10 lg:h-[20rem]">
          <div class="lg:absolute lg:top-4 lg:left-0">
            <Card
                :color="'#FACDEB'"
                :title="'Sensations'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="lg:absolute lg:bottom-0 lg:left-60">
            <Card
                :color="'#CEFF1B'"
                :title="'Emotions'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="lg:absolute lg:top-0 lg:right-0">
            <Card
                :color="'#CEBBFE'"
                :title="'Besoins'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="bottom-0 right-0 mx-auto lg:absolute">
            <Button
                :color="'#FFFFF'"
                :content="'En savoir plus'"
                :icon="'/arrow.svg'"
            />
          </div>
        </div>

        <div class="flex flex-col items-center lg:py-20 lg:relative lg:block lg:mt-0">
          <div class="transform translate-y-8 -top-12 -left-20 w-[12rem] -rotate-12 lg:absolute g:translate-y-0">
            <Illu
                :illu="'/vinny.jpeg'"
            />
          </div>
          <Card
              :color="'#FFFFF'"
              :content="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh lacus, vehicula vitae aliquet ut, gravida sed tortor.'"
              :button="true"
          >
            <Button
                :color="'#93ECEE'"
                :content="'Commencer'"
                :link="'/test'"
            />
          </Card>
        </div>
      </div>
      <Footer/>
  </Container>
  </div>
</template>
