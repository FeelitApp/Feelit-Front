<script setup>
const route = useRoute()
</script>

<template>
  <div>
    <Container>
      <Hero/>
      <div class="container flex flex-col mx-auto px-10 lg:px-48 py-10 lg:py-20 gap-8">

        <div class="font-grotesk text-md lg:text-lg flex flex-col gap-4">
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

        <div class="lg:relative flex flex-col lg:flex-row lg:pb-10 lg:h-[20rem] gap-8">
          <div class="lg:absolute lg:top-4 lg:left-0">
            <Card
                :color="'#FACDEB'"
                :title="'Sensations'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="lg:absolute lg:bottom-0 lg:left-56">
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
          <div class="mx-auto lg:absolute bottom-0 right-0">
            <Button
                :color="'#FFFFF'"
                :content="'En savoir plus'"
                :icon="'/arrow.svg'"
                :iconStatus ="true"
            />
          </div>
        </div>

        <div class="lg:py-20 lg:relative lg:block flex flex-col items-center  lg:mt-0">
          <div class="lg:absolute transform translate-y-8 lg:translate-y-0 -top-2 -left-24 w-[12rem] -rotate-12">
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
                :iconStatus ="false"
            />
          </Card>
        </div>
      </div>
  </Container>
  </div>
</template>
