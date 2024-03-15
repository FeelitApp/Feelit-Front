<template>
  <div>
    <div class="w-44 rounded-xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] p-4 bg-blue absolute -top-10 right-8">

      <button label="Open" @click="isOpen = true" class="flex flex-row rounded-3xl border-2 border-black bg-white py-2 px-3 items-center">
        <img src="/account_2.svg" alt="Icône connexion" class="h-6 mr-2">
        <span class="text-md font-bold font-grotesk">Connexion</span>
      </button>

      <UModal v-model="isOpen"
        :ui="{
          overlay: {
            background: 'bg-gray-700/75'
          },
          rounded: 'rounded-xl',
          shadow: 'shadow-[4px_4px_0_rgba(0,0,0,1)]',
          base: 'border-black border-2',
          container: 'flex items-center'
        }"
      >
        <LoginForm />
        <button @click="isOpen = false" class="font-grotesk text-sm text-gray-400 pb-6">Fermer</button>
      </UModal>

    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)
</script>