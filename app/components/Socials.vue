<template>
  <ul class="social">
    <!-- Telegram -->
    <li class="social__item">
      <a
        href="https://t.me/connectomas"
        target="_blank"
        class="social__link"
      >
        <Icon
          class="socials__icon"
          name="telegram"
          size="28px"
          color="#25D366"
        />
      </a>
    </li>

    <!-- YouTube -->
    <li class="social__item">
      <a
        href="https://youtube.com/@niyatchannel?si=3ktHiErobBl3Vdkr"
        target="_blank"
        class="social__link"
      >
        <Icon
          class="socials__icon"
          name="youtube"
          size="28px"
          color="#FF0000"
        />
      </a>
    </li>

    <!-- Instagram -->
    <li class="social__item">
      <a
        href="https://www.instagram.com/whytomas?igsh=MWJvYmVxbW14bndmbg=="
        target="_blank"
        class="social__link"
      >
        <Icon
          class="socials__icon"
          name="instagram"
          size="28px"
          color="#C13584"
        />
      </a>
    </li>

    <!-- Почта -->
    <li class="social__item">
      <a
        href="mailto:tomassaid@mail.ru"
        class="social__link"
      >
        <Icon
          class="socials__icon"
          name="mail"
          size="28px"
          color="#000000"
        />
      </a>
    </li>

    <!-- X / Twitter -->
    <li class="social__item">
      <a
        href="https://x.com/whytomas?s=21&t=mTE1g9u7WVQC6B4SkDpFCw"
        target="_blank"
        class="social__link"
      >
        <Icon
          class="socials__icon"
          name="x"
          size="24px"
          color="#1DA1F2"
        />
      </a>
    </li>
    <!-- VK только для русской версии -->
    <li
      v-if="locale === 'ru'"
      class="social__item"
    >
      <a
        href="https://vk.com/tomgai"
        target="_blank"
        class="social__link"
      >
        <Icon
          class="socials__icon"
          name="vk"
          size="28px"
          color="#4a76a8"
        />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Icon from "./UI/Icon.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped lang="scss">
.social {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }
  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    /* сами SVG path */
    ::v-deep(svg path) {
      transition: 0.3s all;
      //   opacity: 0.8; /* начальная прозрачность */
    }

    &:hover {
      /* glow по контуру иконки */
      ::v-deep(svg path) {
        fill: rgba(103, 231, 139, 1); /* основной цвет */
        fill-opacity: 1; /* на hover полностью непрозрачная */
        // filter: drop-shadow(0 0 6px rgba(103, 231, 139, 0.7))
        //   drop-shadow(0 0 12px rgba(103, 231, 139, 0.5));
      }
    }
  }
}
</style>
