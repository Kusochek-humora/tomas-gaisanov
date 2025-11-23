<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const props = defineProps<{
  id: string;
  title: string;
  text: string;
}>();

const isMobile = useMediaQuery("(max-width: 1024px)");
const isOpen = ref(false);

const toggle = () => {
  if (!isMobile.value) return;
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="tooltip-or-dropdown">
    <span
      class="trigger"
      @click="toggle"
    >
      {{ title }}
    </span>

    <div
      v-if="isMobile && isOpen"
      class="dropdown-text"
    >
      {{ text }}
    </div>

    <div
      v-if="!isMobile"
      class="tooltip-text"
    >
      {{ text }}
    </div>
  </div>
</template>
