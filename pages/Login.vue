<template>
  <div>
    <Container>
      <Hero/>

      <div class="flex flex-col gap-8 lg:relative lg:flex-row lg:pb-10 lg:h-[20rem]">
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
        <div class="bottom-0 right-0 mx-auto lg:absolute">
          <Button
              :color="'#FFFFF'"
              :content="'En savoir plus'"
              :icon="'/arrow.svg'"
          />
        </div>
      </div>

      <Footer/>
    </Container>
  </div>
</template>

<script setup lang="ts">
</script>