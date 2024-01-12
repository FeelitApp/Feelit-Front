<template>
  <h2 class="font-grotesk font-semibold text-3xl mx-auto mb-8">
    Les besoins </h2>
  <div
      class="columns-2 gap-10">
    <div v-for="need in data"
         class="h-fit rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex-col mb-10">
      <img :src="need.picture"
           class="border-2 border-b-black"/>
      <p class="text-center m-6 font-grotesk">{{ need.content }}</p>
    </div>
  </div>
</template>

<script setup>
const data = ref('')

const fetchNeed = async () => {
  try {
    data.value = await $fetch('http://127.0.0.1:8000/api/need')
    console.log(data.value)
  } catch (e) {
    console.log({e})
  }
}

fetchNeed()
</script>