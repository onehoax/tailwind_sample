<template>
  <a href="#" class="block px-2 py-1 mt-1 rounded hover:bg-gray-600 text-white font-semibold sm:m-2">{{ name }}</a>
</template>

<script setup lang="ts">
defineProps(["name"]);
</script>
