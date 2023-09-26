<template>
  <div class="relative mx-5 z-10">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-white focus:outline-none focus:border-gray-500"
    >
      <img src="/img/download.png" alt="account pic" class="h-full w-full object-cover" />
    </button>
    <!-- button taking up whole screen so that screen becomes opaque when account settings is open
         tabindex = -1 makes it inaccessible from the keyboard with tab -->
    <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default" tabindex="-1"></button>
    <!-- "left-0 sm:right-0" doesn't work, so we do one instance for mobile and another one for screen >= sm -->
    <div v-if="isOpen" class="absolute sm:hidden left-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-2xl">
      <AccountLink v-for="(link, i) in links" :name="links[i]" />
    </div>
    <div v-if="isOpen" class="absolute hidden sm:block sm:right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-2xl">
      <AccountLink v-for="(link, i) in links" :name="links[i]" />
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ["Account Settings", "Support", "Sign Out"];

const isOpen = ref(false);

function handleEscape(e: KeyboardEvent) {
  if (e.key === "Esc" || e.key === "Escape") isOpen.value = false;
}

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleEscape);
});
</script>
