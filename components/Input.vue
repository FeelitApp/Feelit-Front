<template>

  <div>
    <label class="flex font-grotesk text-sm mb-1">
      {{props.label}}
    </label>
    <input
      :type="props.type"
      :name="props.name"
      class="font-grotesk px-1 py-1 outline outline-1 outline-offset-1 outline-black rounded-2xl w-full"
      />
  </div>

</template>


<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  label: {
    type: String,
  }
})
</script>