<template>
  <div :class="['wrapper', { 'wrapper--scroll': pageScroll }]">
    <Header>
      <template #logo>
        <NuxtLink
          class="header__logo"
          to="/"
          :class="{ active: isMenuOpen }"
          @click="closeMenu"
        >
          <img
            class="header__logo-img"
            src="./assets/images/logo.svg"
            alt="Niyat logo"
          />
        </NuxtLink>
      </template>
      <template #burger>
        <button
          class="burger"
          @click="isMenuOpen = !isMenuOpen"
        >
          <img
            v-if="!isMenuOpen"
            class="burger__svg"
            src="./assets/images/burger.svg"
            alt="Open menu"
          />

          <img
            v-else
            class="burger__svg"
            src="./assets/images/close-burger.svg"
            alt="Close menu"
          />
        </button>
      </template>
    </Header>
    <NuxtPage
      :transition="{
        name: 'my',
        mode: 'out-in',
        onBeforeEnter,
      }"
    />
    <Navigation
      class="nav-toggler"
      :class="{ active: isMenuOpen }"
      @nav-click="isMenuOpen = false"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useNuxtApp } from "#app";
const closeMenu = () => {
  isMenuOpen.value = false;
};
const isMenuOpen = ref(false);

function toggleMenu() {
  console.log("toggle clicked"); // <-- проверь, срабатывает ли
  isMenuOpen.value = !isMenuOpen.value;
}
const { finalizePendingLocaleChange } = useI18n();

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};

const route = useRoute();
const nuxtApp = useNuxtApp();

// Достаём meta.scroll из маршрута
const pageScroll = computed(() => {
  return Boolean(route.meta.scroll);
});
</script>
<style lang="scss">
.wrapper {
  overflow-y: hidden; /* твой текущий стиль */
  height: 100vh;
  &.wrapper--scroll {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.nav-toggler {
  display: flex;
  @media screen and (max-width: 1023px) {
    display: none !important;
  }
}
.nav-toggler.active {
  display: flex !important;

}
.mobile-navigation {
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    z-index: 1000;
  }
}
.my-enter-active,
.my-leave-active {
  transition: opacity 0.3s;
}
.my-enter,
.my-leave-active {
  opacity: 0;
}
.burger {
  background-color: transparent;
  width: 67px;
  height: 45px;
  position: relative;
  cursor: pointer;
  display: none;
  padding: 0;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  &__svg {
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    object-fit: cover;
    object-position: center;
  }
}
</style>
