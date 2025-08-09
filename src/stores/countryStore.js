import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCountryStore = defineStore('countryStore', () => {
  const error = ref(null)
  const resData = ref(null)

  const getCountry = async (selected) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${selected}`)
      console.log('response', response)
      resData.value = response.data
    } catch (err) {
      error.value = 'Maʼlumotlarni yuklashda xatolik yuz berdi!'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { getCountry, resData, error }
})
