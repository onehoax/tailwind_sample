<template>
  <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">{{ name }}</a>
</template>

<script setup lang="ts">
defineProps(["name"]);
</script>
