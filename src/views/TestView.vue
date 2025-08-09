<template>
  <div>
    <h1 class="text-center font-bold">Todo Sahifasi</h1>

    <section class="flex flex-col items-start justify-start">
      <label for="name">Name</label>
      <input class="px-4 rounded-md" placeholder="Name of user" type="text" name="" id="name" />
      <label for="age">Age</label>
      <input class="px-4 rounded-md" placeholder="Age of user" type="text" name="" id="age" />
      <br />
      <button class="btn bg-blue-400 px-4 rounded-md text-white">Add</button>
    </section>
    <section>
      <div>
        <div
          class="bg-green rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition w-full max-w-sm"
        >
          <!--          <img-->
          <!--            :src="assets/img/ice-mountain.jpg"-->
          <!--            alt="Card image"-->
          <!--            class="w-full h-48 object-cover"-->
          <!--         />-->

          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h2>
            <p class="text-gray-600 mb-4">{{ description }}</p>
            <button
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              @click="onClick"
            >
              Batafsil
            </button>
          </div>
        </div>
      </div>
      <button
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        @click="increaseValue"
      >
        Add
      </button>
      {{ counter }}

      {{ multipleForTwo }}
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch, watchEffect, computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore.js'

import ModalComponent from '@/components/ModalComponent.vue'

const params = ref({
  name: '',
  age: '',
})
const isOpen = ref(false)

const createNewTodo = async () => {
  await todoStore.postTodo(params.value)
  await todoStore.getTodo()
}

const todoStore = useTodoStore()

const editModel = ref('')
const editId = ref('')
const temporaryId = ref('')

const editModalOpen = (item) => {
  isOpen.value = true
  console.log('item', item)
  editModel.value = item.name
  editId.value = item.id
}

const multipleForTwo = computed(() => {
  return counter.value * counter.value * counter.value
})

const inputModel = ref('')

const increaseValue = () => {
  counter.value++

  console.log('toShowChange', counter.value)
}

const editParams = ref({
  name: '',
})

const counter = ref(0)

watch(
  () => inputModel.value,
  (newValue) => {
    console.log('input type...')
  },
)

// watchEffect((  ) => {
//   console.log('effect value:', toShowChange.value)
// })

const saveUpdatedModal = async () => {
  editParams.value.name = editModel.value
  await todoStore.updateTodo(editParams.value, editId.value)
  await todoStore.getTodo()
  isOpen.value = false
}

const deleteTodo = async () => {
  await todoStore.deleteTodo(temporaryId.value)
  await todoStore.getTodo()
  showModal.value = false
  temporaryId.value = ''
}

const showModal = ref(false)

const openModal = (id) => {
  temporaryId.value = id
  showModal.value = true
}

onMounted(async () => {
  await todoStore.getTodo()
})
</script>
