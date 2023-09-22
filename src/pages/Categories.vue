<script setup>
import { reactive, onBeforeMount } from 'vue'
import axios from 'axios'

const categories = reactive({});
onBeforeMount(() => {
  axios.get('https://dummyjson.com/products/categories')
    .then(function (response) {
      Object.assign(categories, response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
})
</script>

<template>
  <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
      <div v-for="category in categories" :key="categories"
        class="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
        <div class="flex-1 min-w-0">
          <RouterLink :to="`/categories/${category}`" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">{{ category }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
