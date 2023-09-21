<script setup>
import axios from 'axios'
import {onBeforeMount,ref} from 'vue';

const products = ref(null)
onBeforeMount(() => {
  axios.get('https://dummyjson.com/products')
    .then(function (response) {
      products.value = response.data.products
      console.log(response.data.products);
    })
    .catch(function (error) {
      console.log(error);
    })
})
</script>
<template>
  <div class="bg-white">
    <div class="px-4 py-16 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="text-sm group">
          <div class="w-full overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
            <img :src="product.thumbnail" :alt="product.imageAlt" class="object-cover object-center w-full h-full" />
          </div>
          <h3 class="mt-4 font-medium text-gray-900">{{ product.title }}</h3>
          <p class="italic text-gray-500">{{ product.stock }} available</p>
          <p class="mt-2 font-medium text-gray-900">${{ product.price }}</p>
        </a>
      </div>
    </div>
  </div>
</template>