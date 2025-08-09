<template>
  <nav class="flex justify-between items-center px-16 my-4">
    <div><img src="../assets/sinaps-logo.svg" height="40" width="142" /></div>
    <ul class="flex justify-center  items-center">
      <li>Loyiha haqida</li>
      <li class="mx-16">
        <SelectComponent
          v-model="selected"
          :options="articleOptions"
        />
      </li>
      <li>Ensiklopediya</li>
    </ul>
    <div class="flex justify-center items-center  border border-[#00AABB] p-2  rounded-lg">
      <img class="p-0 m-0" src="@/assets/search.svg" alt="">
    </div>
  </nav>
</template>


<script setup>
import SelectComponent from '@/components/SelectComponent.vue'
import { ref, watch } from 'vue'
import {useRouter} from "vue-router"

const router = useRouter()

const selected = ref('')
const articleOptions = [
  { value: 'Huqushunoslik', label: 'Huquq', id: 1 },
  { value: 'Tarix', label: 'Tarix', id: 2 },
  { value: 'Matematika', label: 'Matematika', id: 3 },
  { value: 'Biologiya', label: 'Biologiya', id: 4 },
  { value: 'Ta\'lim', label: 'Ta\'lim', id: 5 },
  { value: 'Fizika', label: 'Fizika', id: 6 }
];

watch(selected, (newValue) => {
  console.log('Yangi qiymat:', newValue)
  const test = articleOptions.find(item => item.value == newValue)
  router.push({path:`/articles/${test.id}`})
})

</script>
