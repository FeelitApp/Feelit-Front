<script setup>
import {api} from "~/api/client.ts";
import { Calendar as VueCalendar } from 'v-calendar';
import 'v-calendar/style.css';

const dataEntries = ref([]);
const entriesDates = ref([]);
const selectedDate = ref(null);
const selectedEntries = ref([]);

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

function handleDayClick(day) {
  selectedDate.value = day.date;
  selectedEntries.value = dataEntries.value.filter(entry => {
    const entryDate = new Date(entry.created_at).toDateString();
    const selectedDay = new Date(day.date).toDateString();
    return entryDate === selectedDay;
  });
}

function downloadFile(data, filename, type) {
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadEntries() {
  const data = dataEntries.value;
  const jsonData = JSON.stringify(data, null, 2);
  downloadFile(jsonData, 'data_entries.json', 'application/json');
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
              @dayclick="handleDayClick"
          />
        </div>
      </div>
      <div class="flex gap-4">
        <Button
            :color="'#FFFFFF'"
            :content="'Télécharger toutes les données'"
            @click="() => downloadEntries()"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-8 sm:w-[45%]">
      <div class="rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col h-80 w-full">
        <div class="w-full px-4 py-2 mt-0 border-b-2 border-black bg-purple">
          <p class="font-grotesk">Données enregistrées</p>
        </div>
        <div class="px-6 py-6 overflow-x-hidden overflow-y-auto">
          <div v-if="!selectedDate">
            <p class="font-grotesk">Sélectionnez une date dans le calendrier pour afficher les données enregistrées.</p>
          </div>
          <div v-if="selectedEntries.length === 0 && selectedDate">
            <p class="font-grotesk">Aucune entrée pour la date sélectionnée.</p>
          </div>
          <div v-else>
            <div v-for="(entry, index) in selectedEntries" :key="entry.id" class="mb-4">
              <p class="bg-purple text-white text-center mb-1 py-0.5 px-1 w-fit m-auto">ENTRÉE N°{{ index + 1 }}</p> <!-- Titre de l'entrée -->
              <p class="font-bold font-grotesk">Sensation :</p>
              <p class="font-grotesk">{{ entry.sensation.content }}</p>
              <p class="font-bold font-grotesk">Émotion :</p>
              <p class="font-grotesk">{{ entry.emotion.content + ' ' + entry.feeling.emoji }}</p>
              <p class="font-bold font-grotesk">Besoin :</p>
              <p v-if="entry.need.content" class="font-grotesk">{{ entry.need.content }}</p>
              <p class="font-bold font-grotesk">Commentaire :</p>
              <p v-if="entry.comment" class="font-grotesk">{{ entry.comment }}</p>
            </div>
          </div>
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
