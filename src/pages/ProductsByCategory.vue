<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue';
import ProductList from '../components/ProductList.vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const products = ref(null)
onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products/category/${route.params.category}`)
    .then(function (response) {
      products.value = response.data.products
    })
    .catch(function (error) {
      console.log(error);
    })
})
</script>
<template>
  <div class="bg-white">
    <div class="px-4 py-16 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
        <ProductList :products="products" />
      </div>
    </div>
  </div>
</template>