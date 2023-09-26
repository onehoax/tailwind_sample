<template>
  <NavBar />
  <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
    <PropertyCard :property="property" />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "text-gray-800"
  }
});

const property = {
  imgUrl: "/img/prop1.jpg",
  imgAlt: "home pool",
  beds: 3,
  baths: 2,
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  priceInCents: 190000,
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4
};
</script>
