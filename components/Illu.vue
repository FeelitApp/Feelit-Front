<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    illu: {
        type: String,
    }
})
</script>

<template>
    <div class="w-full rounded-xl border-2 border-black overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,1)]">
      <img :src="props.illu" class="object-cover" />
    </div>
</template>
