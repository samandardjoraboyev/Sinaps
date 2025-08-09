<template>
  <main>
    <!--    <pre>-->
    <!--      {{todoStore?.resData}}-->
    <!--    </pre>-->
    <div class="flex flex-col w-32 mt-4">
      <label for="name">Name</label>
      <input
        id="name"
        class="border-1 border-blue-2"
        type="text"
        v-model="params.name"
        placeholder="Name"
      />
      <label for="age">Age</label>
      <input
        id="age"
        class="border-1 border-blue-2"
        type="text"
        v-model="params.age"
        placeholder="Age"
      />
      <button @click="createNewTodo" class="btn bg-blue-400">Add</button>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          :key="item?.id"
          v-for="item in todoStore?.resData"
          class="border border-sky-500 rounded-xl p-4 shadow-md bg-white"
        >
          <div>
            <img
              :src="item?.avatar"
              alt="Item image"
              class="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h1 class="text-lg font-semibold">{{ item?.name }}</h1>
            <h4 class="text-lg font-semibold">{{ item?.age }}</h4>
          </div>
          <div class="flex justify-between my-4">
            <button @click="editModalOpen(item)">
              <img src="@/assets/edit.svg" alt="" class="w-5 h-5" />
            </button>
            <button @click="openModal(item.id)">
              <img src="@/assets/img/remove.svg" alt="" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <ModalComponent v-if="isOpen">
      <input type="text" placeholder="Edit" v-model="editModel" />
      <template #footer>
        <button
          class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mr-2"
          @click="isOpen = false"
        >
          Yopish
        </button>
        <button
          class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          @click="saveUpdatedModal"
        >
          Save
        </button>
      </template>
    </ModalComponent>
    <ModalComponent v-if="showModal">
      <h1 class="text-lg font-semibold">Are you sure you want to delete this item?</h1>
      <template #footer>
        <button
          class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mr-2"
          @click="showModal = false"
        >
          Yopish
        </button>
        <button
          class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          @click="deleteTodo"
        >
          Delete Anyway
        </button>
      </template>
    </ModalComponent>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
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

const editParams = ref({
  name: '',
})

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
