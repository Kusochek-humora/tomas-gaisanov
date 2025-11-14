<script lang="ts" setup>
import Socials from "./Socials.vue";
const emit = defineEmits(["nav-click"]);
</script>
<template>
  <header class="header">
    <div class="header__container container">
      <slot name="logo"></slot>
      <LangSwitcher class="header__lang"></LangSwitcher>
      <Socials class="header__socials"></Socials>

      <slot name="burger"></slot>
    </div>
  </header>
</template>
<style lang="scss">
.header {
  padding: 30px 0;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding:30px 0 ;
    // padding: 0;
  }
  &__lang {
    margin-left: auto;
    margin-right: 60px;
    @media screen and (max-width: 1024px) {
      display: none !important;
    }
  }
  // &__logo {
  // }

  // &__logo-img {
  // }

  &__socials {
    @media screen and (max-width: 1024px) {
      display: none !important;
    }
  }
}
</style>
