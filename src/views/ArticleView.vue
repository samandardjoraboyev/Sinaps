<template>
  <div class="p-6 mt-4 max-w-2xl mx-auto bg-white rounded-xl shadow">
    <img :src="`https://picsum.photos/id/${localeData?.id}/600/400`" class="rounded mb-4" />
    <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ localeData?.title }}</h1>
    <p class="text-gray-600">{{ localeData?.description }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import {onMounted, ref} from 'vue'

const route = useRoute()
const id = route.params.id;
const localeData = ref(null)

onMounted(()=>{
  localeData.value = localStorage.getItem('cardItem');
  localeData.value = JSON.parse(localeData.value)

})
</script>
