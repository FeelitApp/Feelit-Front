<template>
  <VueCalendar borderless transparent expanded :attributes="attrs"/>
</template>


<script setup>
import { Calendar as VueCalendar } from 'v-calendar';
import 'v-calendar/style.css';

import { ref } from 'vue';

const attrs = ref([
  {
    key: 'today',
    dot: true,
    dates: new Date(),
  },
]);

</script>

