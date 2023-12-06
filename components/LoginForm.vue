<template>
  <div class="w-full bg-white m-auto overflow-hidden">

    <div class="flex flex-row h-12 justify-between">

      <button @click="activeTab = 'Connexion'" v-bind:class="activeTab != 'Connexion' ? 'rounded-br-xl border-r-2 border-b-2 border-black bg-light-pink opacity-50 font-bold' : 'font-bold text-pink'" class="w-1/2 font-grotesk">
        Connexion
      </button>

      <button @click="activeTab = 'Inscription'" v-bind:class="activeTab != 'Inscription' ? 'rounded-bl-xl border-l-2 border-b-2 border-black bg-light-pink opacity-50 font-bold' : 'font-bold text-pink'" class="w-1/2 font-grotesk">
        Inscription
      </button>

    </div>

    <div class="pt-10 pb-4 px-10">

      <div v-if="activeTab === 'Connexion'" class="flex flex-col gap-y-6 items-center">
        <Input
          type="email"
          name="email"
          label="E-mail"
          class="w-full"
        />
        <Input
            type="password"
            name="password"
            label="Mot de passe"
            class="w-full"
        />
        <div class="flex gap-x-6">
          <Button
            color="#93ECEE"
            content="Se connecter"
            link="#"
            class="mt-4"
          />
        </div>
      </div>

      <div v-else class="flex flex-col gap-y-6 items-center">
        <Input
            type="username"
            name="username"
            label="Nom d'utilisateur"
            class="w-full"
        />
        <Input
            type="email"
            name="email"
            label="E-mail"
            class="w-full"
        />
        <Input
            type="password"
            name="password"
            label="Mot de passe"
            class="w-full"
        />
        <Input
            type="password"
            name="confirmPassword"
            label="Confirmez votre mot de passe"
            class="w-full"
        />
        <Button
            color="#93ECEE"
            content="S'inscrire"
            link="#"
            class="mt-4"
        />
      </div>

    </div>

  </div>
</template>



<script setup>

  const activeTab = ref("Connexion")

</script>