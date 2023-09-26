<template>
  <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center">
    <div class="flex justify-between items-center px-4 py-3">
      <div>
        <img src="/img/logo-inverted.svg" alt="workcation" class="h-8" />
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="h-6 w-6 fill-current text-gray-400 stroke-gray-400 stroke-1 focus:text-white focus:outline-none hover:text-white"
        >
          <Bars3Icon v-if="!isOpen" />
          <XMarkIcon v-if="isOpen" />
        </button>
      </div>
    </div>
    <!-- "sm:block" overrides the dynamic class "block or hidden" 
         once it hits the sm breakpoint; therefore for screens < sm,
         the links visibility is controlled through the the hamburguer;
         for screens >- sm, the links are always visible.
         In our case we use "sm:flex" so that the container displays
         all the links inline -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:items-center sm:p-0">
      <NavLink v-for="(link, i) in links" :name="links[i]" />
      <AccountDropdown />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";

const links = ["List your propery", "Trips", "Messages"];

const isOpen = ref(false);
</script>
