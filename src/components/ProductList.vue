<script setup>
import { defineProps } from 'vue';

const props = defineProps(['products'])
</script>
<template>
  <RouterLink v-for="product in products" :key="product.id" :to="`/product/${product.id}`"
    class="text-sm border rounded-lg group">
    <div class="w-full overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
      <img :src="product.thumbnail" :alt="product.title" class="object-cover object-center w-full h-full" />
    </div>
    <div class="p-3">
      <h3 class="font-medium text-gray-900">{{ product.title }}</h3>
      <div class="flex items-center justify-between">
        <p class="italic text-gray-500">{{ product.stock }} available</p>
        <p class="font-medium text-gray-900">${{ product.price }}</p>
      </div>
    </div>
  </RouterLink>
</template>