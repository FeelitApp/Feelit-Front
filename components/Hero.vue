<template>
  <div class="bg-[url('/bg_hero.svg')] bg-no-repeat bg-cover border-b-2 border-black">
    <NuxtLink to="/">
    <div class="flex flex-col items-center justify-center px-8 py-6 lg:flex-row gap-4 lg:gap-8 lg:px-20 lg:py-10">

      <img src="/logo_feelit_green.svg" class="object-contain w-52"/>

      <div class="flex flex-col text-2xl font-medium text-black font-grotesk lg:text-4xl gap-2">
        <h1 class="px-1 py-1 bg-white w-fit">
          Apprenez à identifier
        </h1>
        <h1 class="px-1 py-1 bg-white">
          et décoder vos émotions
        </h1>
      </div>

    </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
</script>