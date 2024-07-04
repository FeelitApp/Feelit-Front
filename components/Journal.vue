<script setup>
import {api} from "~/api/client.ts";
import { Calendar as VueCalendar } from 'v-calendar';
import 'v-calendar/style.css';

const dataEntries = ref([]);
const entriesDates = ref([]);

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'purple',
      fillMode: 'outline',
    },
    dates: new Date(),
  },
]);

async function fetchEntries () {
  try {
    dataEntries.value = await api.data.getEntries();
    console.log(dataEntries.value.map(entry => entry['created_at']));
    entriesDates.value = dataEntries.value.map(entry => new Date(entry['created_at']));
    attrs.value = [
      ...attrs.value.filter(attr => attr.key !== 'entries'),
      {
        key: 'entries',
        dot: 'pink',
        dates: entriesDates.value,
      },
    ];
  } catch (e) {
    console.log({e})
  }
}
fetchEntries()
</script>

<template>
  <div class="flex flex-col gap-10 sm:flex sm:flex-row sm:justify-between">
    <div class="flex flex-col items-center gap-8 sm:w-[50%]">
      <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col h-80 w-full">
        <div class="w-full px-4 py-2 mt-0 border-b-2 border-black bg-pink">
          <p class="font-grotesk">Calendrier</p>
        </div>
        <div class="px-4 py-2">
          <VueCalendar
              borderless transparent expanded
              :attributes="attrs"
          />
        </div>
      </div>
      <Button
          :color="'#FFFFFF'"
          :content="'Télécharger toutes les données'"
      />
    </div>
    <div class="flex flex-col items-center gap-8 sm:w-[45%]">
      <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col h-80 w-full">
        <div class="w-full px-4 py-2 mt-0 border-b-2 border-black bg-purple">
          <p class="font-grotesk">Données enregistrées</p>
        </div>
        <div class="px-6 py-6 overflow-y-auto overflow-x-hidden">
          <p class="font-grotesk">Sélectionnez une date dans le calendrier pour afficher les données enregistrées.</p>
          <p class="font-grotesk">{{ dataEntries[0] }}</p>
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
</template>
