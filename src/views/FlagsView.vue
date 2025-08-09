<template>
  <main class="p-4">
    <div class="w-48">
      <label for="country" class="block mb-2 text-sm font-medium text-gray-700">Mamlakatni
        tanlang:</label>
      <select
        id="country"
        v-model="selected"
        class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">Tanlang...</option>
        <option v-for="country in countries" :key="country" :value="country">
          {{ country }}
        </option>
      </select>

      <p class="mt-4">Tanlangan: <strong>{{ selected }}</strong></p>
    </div>

    <div v-if="countryStore.resData">
      <img :src="countryStore.resData[0]?.flags?.svg" alt="Flags" width="150" height="150">
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useCountryStore } from '@/stores/countryStore.js'


const countryStore = useCountryStore()

const selected = ref('')
const countries = ['Uzbekistan', 'Africa', 'Tajikistan', 'Turkmenistan', 'America', 'Germany', 'Russia', 'Canada', 'Turkey']

watch(selected, (first) => {
  console.log('first', first)
  countryStore.getCountry(first)

})

onMounted(() => {
  countryStore.getCountry()
})
</script>
