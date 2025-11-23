<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Icon from "./UI/Icon.vue";
import LangSwitcher from "./LangSwitcher.vue";
import Socials from "./Socials.vue";
import { ref } from "vue";
const { t } = useI18n(); // для перевода текста
const emit = defineEmits(["nav-click"]);
const closeMenu = () => {
  isMenuOpen.value = false;
};
const isMenuOpen = ref(true);
</script>

<template>
  <nav
    class="nav"

  >
    <button
      class="burger"
      @click.native="emit('nav-click')"
    >
      <img
        class="burger__svg"
        src="../assets/images/close-burger.svg"
        alt="Close menu"
      />
    </button>
    <LangSwitcher class="mobile"></LangSwitcher>
    <Socials class="mobile__social mobile"></Socials>
    <ul class="nav__list">
      <li class="nav__list-item">
        <NuxtLink
          class="nav__list-link"
          to="/now"
          @click.native="emit('nav-click')"
        >
          <Icon
            class="nav__list-border"
            name="border_button"
          ></Icon>
          <span>
            {{ t("nav.now") }}
          </span></NuxtLink
        >
      </li>
      <li class="nav__list-item">
        <NuxtLink
          class="nav__list-link"
          to="/biography"
          @click.native="emit('nav-click')"
        >
          <Icon
            class="nav__list-border"
            name="border_button"
          ></Icon>
          <span>
            {{ t("nav.biography") }}
          </span></NuxtLink
        >
      </li>
      <li class="nav__list-item">
        <NuxtLink
          class="nav__list-link"
          to="/collaboration"
          @click.native="emit('nav-click')"
        >
          <Icon
            class="nav__list-border"
            name="border_button"
          ></Icon>
          <span>
            {{ t("nav.collaboration") }}
          </span>
        </NuxtLink>
      </li>
      <li class="nav__list-item">
        <NuxtLink
          class="nav__list-link"
          to="/publicity"
          @click.native="emit('nav-click')"
        >
          <Icon
            class="nav__list-border"
            name="border_button"
          ></Icon>
          <span> {{ t("nav.publicity") }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
::v-deep(.mobile) {
  display: none !important;
  @media (max-width: 1024px) {
    display: flex !important;
  }
}
// ::v-deep(.mobile__social) {
//   display: flex;
//   gap: 10px;
// }
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
.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 28px;
  @media (max-width: 1024px) {
    position: fixed;

    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(21, 21, 21, 1);
    padding: 0;
    display: flex;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    z-index: 100;
    padding-top: 100px;
  }
  &__list {
    max-width: 1140px;
    width: 100%;
    padding: 0 20px 50px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin: 0 auto;
    @media screen and (max-width: 1024px) {
      //   width: auto;
      max-width: 100%;
      padding: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }

  &__list-item {
    // width: auto;
    width: max-content;
  }
  &__list-link {
    width: 220px;
    position: relative;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ::v-deep(svg path) {
      transition: 0.3s all;
    }
    ::v-deep(svg g) {
      transition: 0.3s all;
    }
    &:hover {
      ::v-deep(svg path) {
        fill: rgba(103, 231, 139, 1);
      }
      span {
        color: rgba(103, 231, 139, 1);
      }
    }
    &:active {
      ::v-deep(svg g) {
        opacity: 1;
      }
      span {
        color: rgba(21, 21, 21, 1);
      }
    }
    // padding: 5px;
    // background-image: url(../assets/images/bg-button.svg);
    // background-repeat: no-repeat;
    // background-size: cover;

    // overflow: hidden;
    // transition: box-shadow 0.3s ease;

    span {
      font-family: "Radiotechnika";
      text-transform: uppercase;
      font-size: 14px;
      line-height: 100%;
      color: #fff;
      cursor: pointer;
      position: relative;
      z-index: 1;
      transition: 0.3s all;
    }
  }
  &__list-border {
    position: absolute;
    width: 220px !important;
    z-index: 0;
    pointer-events: none;
    height: 50px !important;
    top: 0;
    left: 0;
  }
}
</style>
