<script setup>
import { AccountPostPasswordBadRequestImpl } from "~/api/endpoint/account_post_password"
import Journal from "~/components/Journal"
import { AccountPostInfosBadRequestImpl } from '../api/endpoint/account_post_infos'

definePageMeta({colorMode: 'light'});
useHead({
  title: 'Feelit | Tableau de bord',
  meta: [
    {
      name: 'description',
      content: 'Bienvenue sur votre tableau de bord. Retrouvez ici toutes les informations relatives à votre compte.'
    }
  ]
});

const router = useRouter()

const sessionStore = useSessionStore()
const account = sessionStore.account;

const isUpdated = ref(false);
const isUpdatedPassword = ref(false);
const errorUpdate = reactive({
  username: '',
  email: '',
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: ''
})

const currentPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

const currentDate = new Date();
const currDay = new Date().getDate();
const currMonth = currentDate.toLocaleString('default', { month: 'long' });
const currYear = new Date().getFullYear();

const location = ref(null);
const gettingLocation = ref(false);
const errorStr = ref(null);
const meteoData = ref(null);


async function logout() {
  const { $session } = useNuxtApp()
  await $session.logout();
  router.push('/')
}

async function update() {
  const { $session } = useNuxtApp()
  
  errorUpdate.username = undefined
  errorUpdate.email = undefined

  const output = await $session.update(account.data.email, account.data.username)
  if (output instanceof AccountPostInfosBadRequestImpl) {
    errorUpdate.username = output.username
    errorUpdate.email = output.email
    return
  }
  
  isUpdated.value = true;
}

async function updatePassword() {
  const { $session } = useNuxtApp()

  errorUpdate.currentPassword = undefined
  errorUpdate.newPassword = undefined

  if (newPassword.value !== confirmNewPassword.value) {
    errorUpdate.confirmNewPassword =
      'Les mots de passe ne correspondent pas.';
    return;
  }

  const output = await $session.updatePassword(currentPassword.value, newPassword.value)
  if (output instanceof AccountPostPasswordBadRequestImpl) {
    errorUpdate.currentPassword = output.currentPassword
    errorUpdate.newPassword = output.newPassword
    return
  }

  isUpdatedPassword.value = true;
}

async function deleteAccount() {
  if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) {
    const { $session } = useNuxtApp()
    await $session.delete()
    router.push('/')
  }
}

onMounted(() => {
  if (!("geolocation" in navigator)) {
    errorStr.value = 'Géolocalisation indisponible';
    return;
  }

  gettingLocation.value = true;

  navigator.geolocation.getCurrentPosition(async pos => {
    gettingLocation.value = false;
    location.value = pos;

    const url = `http://api.weatherapi.com/v1/current.json?key=49043bfb42f6476388b134930231512&q=${pos.coords.latitude},${pos.coords.longitude}&aqi=no`;

    const data = await $fetch(url);
    data.current.temp_c = Math.round(data.current.temp_c);
    meteoData.value = data
  }, err => {
    gettingLocation.value = false;
    errorStr.value = err.message;
  });
});
</script>

<template>
  <div v-if="sessionStore.account">
    <Container>
      <Hero/>

      <div class="container flex flex-col gap-12 px-6 pt-6 pb-10 mx-auto sm:px-10 sm:pt-10 sm:pb-12 lg:pt-20 lg:pb-0 lg:px-40">

        <div class="flex flex-col gap-6 sm:gap-10 sm:flex sm:flex-row sm:justify-between">
          <div class="flex flex-col gap-4 sm:w-[50%]">
            <h1 class="text-2xl font-medium font-grotesk sm:text-3xl">Bonjour {{ account.data.username }} 👋</h1>
            <p class="whitespace-pre-line font-grotesk">
              Bienvenue sur votre tableau de bord.<br>Vous trouverez sur cette page toutes les informations relatives à votre compte, ainsi que l’historique de vos émotions.            </p>
          </div>
          <div class="flex sm:flex-row gap-6 sm:gap-10 sm:w-[45%]">
            <div class="w-1/2 h-auto items-center gap-0 rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col px-6 py-6">
              <span class="text-5xl font-grotesk">{{currDay}}</span>
              <span class="text-xl font-grotesk">{{currMonth}}</span>
              <span class="text-3xl font-grotesk">{{currYear}}</span>
            </div>
            <div class="w-1/2 rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col px-6 py-6">
              <div class="flex flex-row justify-between">
                <span class="font-grotesk" v-if="errorStr">Impossible d'obtenir la localisation</span>
                <span class="font-grotesk" v-if="meteoData">{{ meteoData.location.name }}</span>
                <span class="font-bold font-grotesk" v-if="meteoData">{{ meteoData.current.temp_c }}°C</span>
              </div>
              <div class="h-8">
                <img class="object-cover w-48" v-if="meteoData" :src="meteoData.current.condition.icon" alt="icon_meteo">
              </div>
            </div>
          </div>
        </div>

        <Journal />

        <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col w-full">
          <div class="w-full px-4 py-2 mt-0 border-b-2 border-black bg-lime">
            <p class="font-grotesk">Paramètres du compte</p>
          </div>
          <div class="flex flex-col justify-center gap-6 px-6 py-10 sm:px-10 sm:py-8 sm:gap-10">
            <div class="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8">
                <Input
                    :type="'username'"
                    :name="'username'"
                    :label="'Nom d\'utilisateur :'"
                    v-model="account.data.username"
                />
                <Input
                    :type="'email'"
                    :name="'email'"
                    :label="'E-mail :'"
                    v-model="account.data.email"
                />
              </div>
              <span class="text-green-400 font-grotesk" v-if="isUpdated">Les modifications ont bien été enregistrées.</span>
              <span class="text-red-400 font-grotesk" v-if="errorUpdate.username">{{ errorUpdate.username.at(0) }}</span>
              <span class="text-red-400 font-grotesk" v-if="errorUpdate.email">{{ errorUpdate.email.at(0) }}</span>
              <div class="mx-auto">
                <Button
                    class="text-md"
                    :color="'#FFFFFF'"
                    :content="'Enregistrer les modifications'"
                    @click="update"
                />
              </div>
              <Input
                      :type="'password'"
                      :name="'currentPassword'"
                      :label="'Mot de passe actuel :'"
                      v-model="currentPassword"

              />
            <div class="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-8">
              <Input
                  :type="'password'"
                  :name="'newPassword'"
                  :label="'Nouveau mot de passe :'"
                  v-model="newPassword"
              />
              <Input
                  :type="'password'"
                  :name="'confirmPassword'"
                  :label="'Confirmer le mot de passe :'"
                  v-model="confirmNewPassword"
              />
              <span class="text-green-400 font-grotesk" v-if="isUpdatedPassword">Mot de passe modifié.</span>
              <span class="text-red-400 font-grotesk" v-if="errorUpdate.currentPassword">{{ errorUpdate.currentPassword.at(0) }}</span>
              <span class="text-red-400 font-grotesk" v-if="errorUpdate.newPassword">{{ errorUpdate.newPassword.at(0) }}</span>
              <span class="text-red-400 font-grotesk" v-if="errorUpdate.confirmNewPassword">{{ errorUpdate.confirmNewPassword }}</span>
            </div>
            <div class="mx-auto">
              <Button
                  class="text-md"
                  :color="'#FFFFFF'"
                  :content="'Modifier le mot de passe'"
                  @click="updatePassword"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
          <Button
              :color="'#FF7B7B'"
              :content="'Supprimer mon compte'"
              @click="deleteAccount"
          />
          <Button
              :color="'#CEBBFE'"
              :content="'Déconnexion'"
              @click="logout"
          />
        </div>

      </div>
      <Footer/>
    </Container>
  </div>
</template>