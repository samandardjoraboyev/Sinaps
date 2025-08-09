<template>
  <div class="p-6">
    <h3 class="text-xl font-bold mb-4">Qiziqarli</h3>
    <h1 class="text-xl font-bold">{{selectedItem && selectedItem?.categoryName}}</h1>
    <p>Bu yerda 16 ta bo‘lim bo‘yicha ilmiy-ommabop maqolalarni o‘qishingiz mumkin!</p>

  </div>
  <section>
    <div>
        <div class="p-6 min-h-screen bg-gray-100">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            @click="cardSaveLocalStorage(item)"
            v-for="item in selectedItem?.items"
            :key="item.id"
            :title="item.title" 
            :description="item.description"
            :image="`https://picsum.photos/id/${item.id}/400/300`"
          />
          </div>
        </div>

    </div>
  </section>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import categories from "@/data/Seed.json"
import { watch, ref, computed, onMounted } from 'vue'
import Card from '@/components/CardTitle.vue'


const route = useRoute()
const router = useRouter()
const selectedItem = ref(null)


const cardSaveLocalStorage = (item) => {
  localStorage.setItem('cardItem', JSON.stringify(item))
  router.push({ name: 'article', params: item.id })
}

watch(() => route.params.id, (newId) => {
  const categoryId = parseInt(newId)
  console.log('categoryId', categoryId)
  selectedItem.value = categories.find(cat => cat.categoryId === categoryId)
})



onMounted(() => {
  selectedItem.value = categories.find(cat => cat.categoryId == route.params.id)
})

</script>
