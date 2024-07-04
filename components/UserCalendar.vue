<script setup>
import { Calendar as VueCalendar } from 'v-calendar';
import 'v-calendar/style.css';

const attrs = ref([
  {
    key: 'today',
    dot: true,
    dates: new Date(),
  },
  {
    key: 'entries',
    highlight: 'green',
    dates: [
        new Date(2024, 6, 2)
    ],
  },
]);
</script>

<template>
  <VueCalendar
      borderless transparent expanded
      :attributes="attrs"
  />
</template>



