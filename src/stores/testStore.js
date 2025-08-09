import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todoStore', () => {
  const error = ref(null)
  const resData = ref(null)
  const loading = ref(null)

  const getTodo = async () => {

    try {
      const response = await axios.get(`https://6860d2018e74864084441365.mockapi.io/api/posts/`)
      console.log('response', response)
      resData.value = response.data
    } catch (err) {
      error.value = 'Maʼlumotlarni yuklashda xatolik yuz berdi!'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const postTodo = async (params) => {

    try {
      const response = await axios.post('https://6860d2018e74864084441365.mockapi.io/api/posts/', params)
      console.log('response', response)
      resData.value = response.data
    } catch (err) {
      error.value = 'Maʼlumotlarni qo\'shishda xatolik yuz berdi!'
      console.error(err)
    } finally {
      loading.value = false
    }
  }


  const updateTodo = async (name, id) => {
    console.log('name', name)

    try {
      const response = await axios.put(`https://6860d2018e74864084441365.mockapi.io/api/posts/${id}`, name)
      console.log('response', response)
      resData.value = response.data
    } catch (err) {
      error.value = 'Maʼlumotlarni qo\'shishda xatolik yuz berdi!'
      console.error(err)
    } finally {
      loading.value = false
    }
  }
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://6860d2018e74864084441365.mockapi.io/api/posts/${id}`)
      // resData.value = resData.value.filter(item => item.id !== id)
    } catch (err) {
      error.value = 'Maʼlumotlarni o\'chirishda xatolik yuz berdi!'
      console.error(err)
    }
  }

  return { getTodo, resData, error, postTodo, updateTodo, deleteTodo,  }
})
