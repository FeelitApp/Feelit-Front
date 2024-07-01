<script setup>
const props = defineProps({
  type: String,
  name: String,
  required: Boolean,
  label: String,
  modelValue: String
});

const emits = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label class="flex mb-1 text-sm font-grotesk">
      {{ label }}
    </label>
    <input
        :type="type"
        :name="name"
        :required="props.required"
        class="w-full px-3 py-1 text-sm font-grotesk outline outline-1 outline-offset-1 outline-black rounded-2xl selection:bg-light-pink"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
