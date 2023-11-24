<script setup>
const route = useRoute()
</script>

<template>
  <div>
    <Container>
      <Hero/>
      <div class="container flex flex-col w-4/6 mx-auto py-10">

        <div class="font-grotesk text-lg flex flex-col gap-4 py-10">
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

        <div class="relative flex flex-row py-10 h-[20rem]">
          <div class="absolute top-4 left-0">
            <Card
                :color="'#FACDEB'"
                :title="'Sensations'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="absolute bottom-0 left-56">
            <Card
                :color="'#CEFF1B'"
                :title="'Emotions'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="absolute top-0 right-0">
            <Card
                :color="'#CEBBFE'"
                :title="'Besoins'"
                :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit, consec tetur adipiscing eli, consec tetur adipiscing elit.'"
                :button="false"
            />
          </div>
          <div class="absolute bottom-0 right-0">
            <Button
                :color="'#FFFFF'"
                :content="'En savoir plus'"
                :icon="'/arrow.svg'"
            />
          </div>
        </div>

        <div class="py-20 relative">
          <div class="absolute -top-2 -left-24 w-[12rem] -rotate-12">
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
            />
          </Card>
        </div>
      </div>
  </Container>
  </div>
</template>
