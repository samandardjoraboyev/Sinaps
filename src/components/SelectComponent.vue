<template>
  <div class="w-32">
    <select
      :value="modelValue"
      @change="onChange"
      class="block w-full px-4 py-1 border-none rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
    >
      <option disabled value="">Maqolalar</option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value"
        class="text-green-800 hover:bg-green-100"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const onChange =(event) => {
  emit('update:modelValue', event.target.value)
}
</script>
