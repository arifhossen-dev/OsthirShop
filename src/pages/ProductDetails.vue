<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
const route = useRoute()

const product = reactive({});
onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products/${route.params.id}`)
    .then(function (response) {
      console.log(response.data);
      Object.assign(product, response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
})

// const product = {
//   name: 'Zip Tote Basket',
//   price: '$140',
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: 'Angled view',
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     // More images...
//   ],
//   colors: [
//     { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
//     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
//     { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: 'Features',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//     // More sections...
//   ],
// }

const selectedColor = ref(null)
</script>
<template>
  <div class="bg-white">
    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab v-for="image in product.images" :key="image.id"
                class="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }">
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image" alt="" class="object-cover object-center w-full h-full" />
                </span>
                <span
                  :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']"
                  aria-hidden="true" />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="w-full aspect-h-1 aspect-w-1">
            <TabPanel v-for="image in product.images" :key="image.id">
              <img :src="image" :alt="image.alt" class="object-cover object-center w-full h-full sm:rounded-lg" />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.title }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                  :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                  aria-hidden="true" />
              </div>
              <p class="sr-only">{{ product.rating }} out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
          </div>

          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">{{ product.stock }} available</h3>
            </div>

            <div class="flex mt-10">
              <button type="submit"
                class="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Add
                to bag</button>

              <button type="button"
                class="flex items-center justify-center px-3 py-3 ml-4 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500">
                <HeartIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="border-t divide-y divide-gray-200">
              <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                <h3>
                  <DisclosureButton class="relative flex items-center justify-between w-full py-6 text-left group">
                    <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name
                    }}</span>
                    <span class="flex items-center ml-6">
                      <PlusIcon v-if="!open" class="block w-6 h-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true" />
                      <MinusIcon v-else class="block w-6 h-6 text-indigo-400 group-hover:text-indigo-500"
                        aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="pb-6 prose-sm prose">
                  <ul role="list">
                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

