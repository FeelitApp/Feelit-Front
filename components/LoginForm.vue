<script setup>
import { api } from '@/api/client'
import { AuthPostRegisterBadRequestImpl } from '@/api/endpoint/auth_post_register'
import { AuthPostLoginBadRequestImpl } from '@/api/endpoint/auth_post_login'

const props = defineProps({
  'from': String
});


const router = useRouter()

const activeTab = ref("Connexion");

const registerData = reactive({
  email: '',
  username: '',
  password: '',
});

const loginData = reactive({
  email: '',
  password: '',
});

const errors = ref({
  email: '',
  blank: '',
  password: '',
  code: '',
});

async function submitRegister () {
  const output = await api.auth.register(
    registerData.email,
    registerData.username,
    registerData.password,
  )

  if (output instanceof AuthPostRegisterBadRequestImpl) {
    errors.value.email = output.email || '';
    errors.value.username = output.username || '';
    errors.value.password = output.password || '';
    return
  }
  activeTab.value = 'Connexion';
}

async function submitLogin () {
  const output = await api.auth.login(
    loginData.email,
    loginData.password
  )

  if (output instanceof AuthPostLoginBadRequestImpl) {
    errors.value.emailLogin = output.email || '';
    errors.value.passwordLogin = output.password || '';
    errors.value.code = output.code || '';
    return
  }

  if (props.from === 'Start') router.push('/quiz');
  else router.push('/dashboard');
};

function clearErrors () {
  errors.value.email = '';
  errors.value.username = '';
  errors.value.password = '';
  errors.value.code = '';
}
</script>

<template>
  <div class="w-full m-auto overflow-hidden bg-white rounded-xl">

    <div class="flex flex-row justify-between h-12">

      <button @click="activeTab = 'Connexion'; clearErrors()" v-bind:class="activeTab != 'Connexion' ? 'rounded-br-xl border-r-2 border-b-2 border-black bg-light-pink font-semibold' : 'font-bold'" class="w-1/2 font-grotesk">
        Connexion
      </button>

      <button @click="activeTab = 'Inscription'; clearErrors()" v-bind:class="activeTab != 'Inscription' ? 'rounded-bl-xl border-l-2 border-b-2 border-black bg-light-pink font-semibold' : 'font-bold'" class="w-1/2 font-grotesk">
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
            v-model="loginData.email"
        />
        <div class="relative w-full">
          <Input
              type="password"
              name="passwordLogin"
              label="Mot de passe"
              class="w-full mb-4"
              required="true"
              v-model="loginData.password"
          />
          <span v-if="errors.email">{{ errors.email.at(0) }}</span>
          <span v-if="errors.password">{{ errors.password.at(0) }}</span>
          <span v-if="errors.code" class="text-sm font-grotesk font-bold text-[#FF7B7B]">
              Identifiant et/ou mot de passe incorrect(s).
          </span>
        </div>
        <div class="flex gap-x-6">
          <Button
              color="#93ECEE"
              content="Se connecter"
              type="submit"
              link="#"
          />
        </div>
      </form>
      <form @submit.prevent="submitRegister" v-else class="flex flex-col items-center gap-y-6">
        <Input
            type="username"
            name="username"
            label="Nom d'utilisateur"
            class="w-full"
            v-model="registerData.username"
        />
        <div class="relative w-full">
          <Input
              type="email"
              name="email"
              label="E-mail"
              class="w-full"
              v-model="registerData.email"
              required
          />
        </div>
        <Input
            type="password"
            name="password"
            label="Mot de passe"
            class="w-full"
            v-model="registerData.password"
        />
        <div class="relative w-full">
          <span v-if="errors.email" class="text-sm font-grotesk font-bold text-[#FF7B7B]">
              L'adresse e-mail est déjà utilisée.
            </span>
          <span v-if="errors.password" class="text-sm font-grotesk font-bold text-[#FF7B7B]">
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
        />
      </form>

    </div>
  </div>
</template>