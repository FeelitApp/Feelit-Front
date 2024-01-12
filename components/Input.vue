<template>
  <div>
    <label class="flex font-grotesk text-sm mb-1">
      {{ label }}
    </label>
    <input
        :type="type"
        :name="name"
        class="font-grotesk px-3 py-1 outline outline-1 outline-offset-1 outline-black rounded-2xl w-full selection:bg-light-pink"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  type: String,
  name: String,
  label: String,
  modelValue: String
});

const emits = defineEmits(['update:modelValue']);
</script>