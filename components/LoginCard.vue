<script setup>
const sessionStore = useSessionStore()

const isOpen = ref(false)
const windowWidth = ref(0)
const leftMarge = ref(windowWidth.value / 2 + 470)
const shouldShow = ref(false);

const leftMargePx = computed(() => `${leftMarge.value}px`)

onMounted(() => {
  handleScreenSize()
  shouldShow.value = true

  window.addEventListener('resize', () => {
    handleScreenSize()
  })

  function handleScreenSize(){
    windowWidth.value = window.innerWidth
    if(windowWidth.value < 1200){
      leftMarge.value = windowWidth.value / 3 + 500
    } else {
      leftMarge.value = windowWidth.value / 2 + 420
    }
  }
})
</script>

<template>
    <div v-if="shouldShow" class="hidden lg:block loginCard w-50 rounded-xl border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] p-4 bg-blue absolute top-44"
         :style="{ left: leftMargePx }">
      <button
        v-if="!sessionStore.account"
        label="Open" 
        @click="isOpen = true" 
        class="flex flex-row items-center px-3 py-2 bg-white border-2 border-black rounded-3xl"
      >
        <img src="/account_2.svg" alt="Icône connexion" class="h-6 mr-2">
        <span class="font-bold text-md font-grotesk">Connexion</span>
      </button>
      <NuxtLink
        v-else
        :to="{ name: 'dashboard' }"
        label="Open" 
        @click="" 
        class="flex flex-row items-center px-3 py-2 bg-white border-2 border-black rounded-3xl"
      >
        <img src="/account_2.svg" alt="Icône connexion" class="h-6 mr-2">
        <span class="font-bold text-md font-grotesk">Mon espace</span>
      </NuxtLink>
    </div>

  <div v-if="shouldShow" class="block lg:hidden loginCard rounded-tl-full rounded-bl-full border-l-2 border-t-2 border-b-2 border-black p-2 bg-blue absolute top-[260px] right-0">
    <button
      v-if="!sessionStore.account"
      label="Open" 
      @click="isOpen = true" 
      class="flex flex-row items-center bg-white rounded-3xl"
    >
      <img src="/account_2.svg" alt="Icône connexion" class="h-10">
    </button>
    <NuxtLink 
      v-else
      :to="{ name: 'dashboard' }"
      label="Open" 
      class="flex flex-row items-center bg-white rounded-3xl"
    >
      <img src="/account_2.svg" alt="Icône connexion" class="h-10">
    </NuxtLink>
  </div>

  <UModal v-model="isOpen"
          :ui="{
          overlay: {
            background: 'bg-gray-700/75'
          },
          rounded: 'rounded-xl',
          shadow: 'shadow-[4px_4px_0_rgba(0,0,0,1)]',
          base: 'border-black border-2',
          container: 'flex items-center',
        }"
  >
    <LoginForm />
    <button @click="isOpen = false" class="pb-6 text-sm text-gray-400 font-grotesk">Fermer</button>
  </UModal>
</template>