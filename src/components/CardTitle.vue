<template>
  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
    <img class="w-full h-48 object-cover" :src="image" alt="Card Image" />
    <div class="p-5">
      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-600 text-sm">{{ description }}</p>
      <div class="mt-4 flex justify-end">
        <button class="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition">
          Batafsil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
})
</script>
