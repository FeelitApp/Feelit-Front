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
        :button="false"
      />
      <Button
        :color="'#FFFFF'"
        :content="'En savoir plus'"
        :icon="'/arrow.svg'"
      />
      <Card 
        :color="'#FACDEB'" 
        :content="'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.'"
        :button="true"
      ><Button
        :color="'#FFFFF'"
        :content="'En savoir plus'"
        :icon="'/arrow.svg'"
      /></Card>
    </Container>
  </div>
</template>
