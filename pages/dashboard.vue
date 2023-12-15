<template>
  <div>
    <Container>
      <Hero/>

      <div class="container flex flex-col px-6 pt-6 pb-10 sm:px-10 sm:pt-10 sm:pb-12 mx-auto gap-12 lg:pt-20 lg:pb-0 lg:px-40">

        <div class="flex flex-col gap-6 sm:gap-10 sm:flex sm:flex-row sm:justify-between">
          <div class="flex flex-col gap-4 sm:w-[50%]">
            <h1 class="font-grotesk font-medium text-2xl sm:text-3xl">Bonjour Théodule44 👋</h1>
            <p class="font-grotesk whitespace-pre-line">
              Bienvenue sur votre tableau de bord.<br>Vous trouverez sur cette page toutes les informations relatives à votre compte, ainsi que l’historique de vos émotions.            </p>
          </div>
          <div class="flex sm:flex-row gap-6 sm:gap-10 sm:w-[45%]">
            <div class="w-1/2 h-auto items-center gap-0 rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col px-6 py-6">
              <span class="font-grotesk text-5xl text-purple">{{currDay}}</span>
              <span class="font-grotesk text-xl">{{currMonth}}</span>
              <span class="font-grotesk text-3xl">{{currYear}}</span>
            </div>
            <div class="w-1/2 rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col px-6 py-6">
              <div class="flex flex-row justify-between">
                <span class="font-grotesk" v-if="errorStr">Impossible d'obtenir la localisation</span>
                <span class="font-grotesk" v-if="meteoData">{{ meteoData.location.name }}</span>
                <span class="font-grotesk font-bold text-pink" v-if="meteoData">{{ meteoData.current.temp_c }}°C</span>
              </div>
              <div class="h-8">
                <img class="object-cover w-48" v-if="meteoData" :src="meteoData.current.condition.icon" alt="icon_meteo">
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-10 sm:flex sm:flex-row sm:justify-between">
          <div class="flex flex-col items-center gap-8 sm:w-[50%]">
            <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col h-80 w-full">
              <div class="bg-pink px-4 py-2 border-b-2 border-black w-full mt-0">
                <p class="font-grotesk">Calendrier</p>
              </div>
              <div class="px-6 py-6">
              </div>
            </div>
            <Button
                :color="'#FFFFFF'"
                :content="'Télécharger toutes les données'"
            />
          </div>
          <div class="flex flex-col items-center gap-8 sm:w-[45%]">
            <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col h-80 w-full">
              <div class="bg-purple px-4 py-2 border-b-2 border-black w-full mt-0">
                <p class="font-grotesk">Données enregistrées</p>
              </div>
              <div class="px-6 py-6">
                <p class="font-grotesk">Sélectionnez une date dans le calendrier pour afficher les données enregistrées.</p>
              </div>
            </div>
            <NuxtLink to="/quiz">
              <Button
                  :bold="true"
                  :color="'#93ECEE'"
                  :content="'Lancer le questionnaire'"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col w-full">
          <div class="bg-lime px-4 py-2 border-b-2 border-black w-full mt-0">
            <p class="font-grotesk">Paramètres du compte</p>
          </div>
          <div class="flex flex-col p-6 gap-6 sm:p-10 sm:gap-10 justify-center">
            <div class="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8">
              <Input
                  :type="'username'"
                  :name="'username'"
                  :label="'Nom d\'utilisateur :'"
              />
              <Input
                  :type="'email'"
                  :name="'email'"
                  :label="'E-mail :'"
              />
              <Input
                  :type="'password'"
                  :name="'password'"
                  :label="'Nouveau mot de passe :'"
              />
              <Input
                  :type="'password'"
                  :name="'confirmPassword'"
                  :label="'Confirmer le mot de passe :'"
              />
            </div>
            <div class="mx-auto">
              <Button
                  class="text-md"
                  :color="'#FFFFFF'"
                  :content="'Enregistrer les modifications'"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center sm:justify-center gap-6 sm:gap-12">
          <Button
              :color="'#FF7B7B'"
              :content="'Supprimer mon compte'"
          />
          <Button
              :color="'#CEBBFE'"
              :content="'Déconnexion'"
          />
        </div>

      </div>
      <Footer/>
    </Container>
  </div>
</template>

<script setup>
  definePageMeta({colorMode: 'light'})

  const currentDate = new Date();
  const currDay = new Date().getDate();
  const currMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currYear = new Date().getFullYear();

  const location = ref(null);
  const gettingLocation = ref(false);
  const errorStr = ref(null);
  const meteoData = ref(null);

  onMounted(() => {
    if (!("geolocation" in navigator)) {
      errorStr.value = 'Geolocation pas disponible';
      return;
    }

    gettingLocation.value = true;

    navigator.geolocation.getCurrentPosition(async pos => {
      gettingLocation.value = false;
      location.value = pos;

      const url = `http://api.weatherapi.com/v1/current.json?key=49043bfb42f6476388b134930231512&q=${pos.coords.latitude},${pos.coords.longitude}&aqi=no`;

      const data = await $fetch(url);
      meteoData.value = data
    }, err => {
      gettingLocation.value = false;
      errorStr.value = err.message;
    });
  });
</script>