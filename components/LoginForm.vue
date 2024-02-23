<template>
  <div class="w-full m-auto overflow-hidden bg-white">

    <div class="flex flex-row justify-between h-12">

      <button @click="activeTab = 'Connexion'" v-bind:class="activeTab != 'Connexion' ? 'rounded-br-xl border-r-2 border-b-2 border-black bg-purple opacity-30 font-semibold' : 'font-bold text-purple'" class="w-1/2 font-grotesk">
        Connexion
      </button>

      <button @click="activeTab = 'Inscription'" v-bind:class="activeTab != 'Inscription' ? 'rounded-bl-xl border-l-2 border-b-2 border-black bg-purple opacity-30 font-semibold' : 'font-bold text-purple'" class="w-1/2 font-grotesk">
        Inscription
      </button>

    </div>

    <div class="px-10 pt-10 pb-4">

      <form @submit.prevent="submitLogin" v-if="activeTab === 'Connexion'" class="flex flex-col items-center gap-y-6">
        <Input
            type="email"
            name="emailLogin"
            label="E-mail"
            required="true"
            class="w-full"
            v-model="emailLogin"
        />
        <div class="relative w-full">
          <Input
              type="password"
              name="passwordLogin"
              label="Mot de passe"
              class="w-full"
              required="true"
              v-model="passwordLogin"
          />
          <span v-if="errors.emailLogin">{{ errors.emailLogin }}</span>
          <span v-if="errors.passwordLogin">{{ errors.passwordLogin }}</span>
          <span v-if="errors.code">Votre identifiant est incorrect.</span>
        </div>
        <div class="flex gap-x-6">
          <Button
              color="#93ECEE"
              content="Se connecter"
              type="submit"
              link="#"
              class="mt-4"
          />
        </div>
      </form>
      <form @submit.prevent="submitRegister" v-else class="flex flex-col items-center gap-y-6">
        <Input
            type="username"
            name="username"
            label="Nom d'utilisateur"
            class="w-full"
            v-model="username"
        />
        <div class="relative w-full">
          <Input
              type="email"
              name="email"
              label="E-mail"
              class="w-full"
              v-model="email"
              required
          />
          <span v-if="errors.email">
              {{ errors.email.at(0) }}
            </span>
        </div>
        <Input
            type="password"
            name="password"
            label="Mot de passe"
            class="w-full"
            v-model="password"
        />
        <div class="relative w-full">
          <Input
              type="password"
              name="confirmPassword"
              label="Confirmez votre mot de passe"
              class="w-full"
              v-model="confirmPassword"
          />
          <span v-if="errors.password">
              {{ errors.password }}
            </span>
          <span v-if="errors.blank">
              {{ errors.blank }}
            </span>
        </div>
        <Button
            color="#93ECEE"
            type="submit"
            content="S'inscrire"
            class="mt-4"
        />
      </form>

    </div>
  </div>
</template>



<script setup>
const activeTab = ref("Connexion");
const email = ref('');
const emailLogin = ref('');
const username = ref('');
const password = ref('');
const passwordLogin = ref('');
const confirmPassword = ref('');
const router = useRouter()


const errors = ref({
  email: '',
  blank: '',
  password: '',
  code: '',
});

const validateForm = () => {
  errors.value.password = password.value !== confirmPassword.value
      ? "Les deux mots de passe ne sont pas identiques." : '';

  return !Object.values(errors.value).some(error => error !== '');
};

const submitRegister = async () => {
  if (!validateForm()) return;

  const formData = new FormData();
  formData.append('email', email.value);
  formData.append('username', username.value);
  formData.append('password', password.value);

  try {
    await $fetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      body: formData
    });

    activeTab.value = 'Connexion';
  } catch (error) {
    if (error.data.errors) {
      errors.value.email = error.data.errors.email || '';
      errors.value.username = error.data.errors.username || '';
      errors.value.password = error.data.errors.password || '';
    }
  }
}

const submitLogin = async () => {
  const formData = new FormData();
  formData.append('email', emailLogin.value);
  formData.append('password', passwordLogin.value);

  try {
    const response = await $fetch('http://127.0.0.1:8000/login', {
      method: 'POST',
      body: formData
    });

    if (response.data !== undefined) {
      router.push('/dashboard');
    }
  } catch (error) {
    if (error.data.errors) {
      errors.value.emailLogin = error.data.errors.emailLogin || '';
      errors.value.passwordLogin = error.data.errors.passwordLogin || '';
    } else {
      errors.value.code = error.data.code || '';
    }
  }
};
</script>