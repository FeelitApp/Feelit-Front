<script setup>
import { Calendar as VueCalendar } from 'v-calendar';
import 'v-calendar/style.css';

const attrs = ref([
  {
    key: 'today',
    dot: true,
    dates: new Date(),
  },
]);
</script>

<template>
  <VueCalendar borderless transparent expanded :attributes="attrs"/>
</template>



