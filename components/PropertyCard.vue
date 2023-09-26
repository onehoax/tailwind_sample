<template>
  <!-- <div class="bg-white rounded-lg overflow-hidden shadow-md"> -->
  <div class="w-2/3">
    <!-- 
      creating a container with a certain padding-bottom value gives
      makes the width of the container be equal to that padding value.
      this is useful to create container for images, where we can place
      the image inside the continaer and give it "h-full w-full" so that
      it takes all the available space in the container without having to
      give the image specific heights and/or widths 
    -->
    <div class="relative pb-96">
      <img class="absolute h-full w-full object-cover object-center rounded-lg shadow-md" :src="property.imgUrl" :alt="property.imgAlt" />
    </div>
    <!-- negative margin to move one element into another
         position elements are always stacked on top of unpositioned elements
         therefore have to make the card positioned (relative) as well 
         here both the img and the card are positioned (relative), but the
         card comes later, therefore it is stacked on top of the img -->
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex items-baseline">
          <span class="bg-teal-200 text-teal-800 text-lg px-2 inline-block rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ property.title }}</h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-xs"> / wk</span>
        </div>
        <div class="mt-2 flex items-center">
          <StarIcon v-for="i in 5" :class="i <= property.rating ? 'text-teal-500' : 'text-gray-400'" class="h-4 w-4 fill-current" />
          <span class="ml-2 text-gray-600 text-xs">{{ property.reviewCount }} reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";

defineProps(["property"]);
</script>
