<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <NuxtLink
    class="lang-toggle"
    v-bind="$attrs"
    v-for="loc in availableLocales"
    :key="loc.code"
    :to="switchLocalePath(loc.code)"
  >
    {{ locale }}
  </NuxtLink>
</template>

<style scoped lang="scss">
.lang-toggle {
  color: rgba(103, 231, 139, 1);
  font-size: 20px;
  line-height: 140%;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Radiotechnika";
  display: inline-flex;
  text-transform: uppercase;
}
</style>
