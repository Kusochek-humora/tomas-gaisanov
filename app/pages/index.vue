<script lang="ts" setup>
// import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Icon from "~/components/UI/Icon.vue";

const { locale, t } = useI18n();
interface MarqueeItem {
  key: string; // ключ для $t
  icon: string; // имя иконки для Icon компонента
}

const words: MarqueeItem[] = [
  { key: "marquee.learn", icon: "learn" },
  { key: "marquee.write", icon: "write" },
  { key: "marquee.ideas", icon: "ideas" },
  { key: "marquee.organize", icon: "organize" },
  { key: "marquee.fun", icon: "fun" },
  { key: "marquee.film", icon: "film" },
  { key: "marquee.share", icon: "share" },
];
// reactive заголовок
const promoTitle = computed(
  () => `${t("promo.title.part1")} ${t("promo.title.part2")}`
);
const promoAlt = computed(() => promoTitle.value);
</script>
<template>
  <section class="promo">
    <div class="promo__top">
      <h1 class="promo__title">
        <span>{{ $t("promo.title.part1") }}</span>
        <span>{{ $t("promo.title.part2") }}</span>
      </h1>

      <h2 class="promo__subtitle">
        {{ $t("promo.subtitle") }}
      </h2>
    </div>

    <div class="promo__marquee">
      <div class="promo__marquee-inner">
        <span
          v-for="(item, i) in words"
          :key="i"
          class="marquee__item"
        >
          <Icon
            :name="item.icon"
            class="marquee__icon"
          />
          {{ $t(item.key) }}
        </span>

        <!-- Дубликат для бесконечной бегущей строки -->
        <span
          v-for="(item, i) in words"
          :key="'copy-' + i"
          class="marquee__item"
        >
          <Icon
            :name="item.icon"
            class="marquee__icon"
          />
          {{ $t(item.key) }}
        </span>
      </div>
    </div>

    <div class="promo__img">
      <img
        src="../assets/images/tomas.webp"
        :alt="promoAlt"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.promo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 150px);
  position: relative;
  &__title {
    font-family: "Terminator-cyr";
    font-size: 80px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px) {
      font-size: 60px;
    }

    @media screen and (max-width: 768px) {
      font-size: 48px;
    }
    @media screen and (max-width: 500px) {
      font-size: 38px;
    }
    span {
      display: inline-block;
    }
    span:first-of-type {
      -webkit-text-stroke: 2px white;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
    span:last-of-type {
      margin-top: 15px;
      -webkit-text-stroke: 2px rgba(103, 231, 139, 1);
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 0 0.75rem rgba(103, 231, 139, 1));
      color: transparent;
    }
  }
  &__subtitle {
    margin-top: 26px;
    text-align: center;
  }
  &__marquee {
    position: relative;
    z-index: 1;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    margin-top: 58px;
    background-color: rgba(103, 231, 139, 1);
    &-inner {
      display: inline-flex;

      gap: 50px;
      animation: marquee 27s linear infinite;

      span {
        font-family: "Radiotechnika";
        padding: 0 20px;
        font-size: 16px;
        gap: 10px;
        color: rgba(21, 21, 21, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 64px;
      }
    }
  }
  &__top {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    color: white;
    text-transform: uppercase;
  }

  &__img {
    max-width: 768px;
    width: 100%;
    height: 864px;
    @media screen and (max-width: 1014px) {

    }
    position: absolute;
    opacity: 1;
    z-index: 0;
    top: 0;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
