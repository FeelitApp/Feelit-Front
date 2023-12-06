<template>
  <div>
    <div class="w-44 rounded-xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] p-4 bg-blue absolute -top-10 right-8">
      <UButton label="Open" @click="isOpen = true" class="flex flex-row rounded-3xl border-2 border-black bg-white py-2 px-3 justify-between items-center">
        <img src="/account_2.svg" class="h-6">
        <span class="text-md font-bold font-grotesk">Connexion</span>
      </UButton>

      <UModal v-model="isOpen">
        <LoginForm/>
      </UModal>

    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>