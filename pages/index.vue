<script setup>
const route = useRoute()
</script>

<template>
  <div>
    <Container>
      <Hero/>
      <Card 
        :color="'#FACDEB'" 
        :title="'Sensations'"
        :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'"
      />
      <Button
        :color="'#FFFFF'"
        :content="'En savoir plus'"
        :icon="'/arrow.svg'"
      />
    </Container>
  </div>
</template>
