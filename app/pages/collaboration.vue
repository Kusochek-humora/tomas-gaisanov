<script setup lang="ts">
const { locale, t } = useI18n();
definePageMeta({ scroll: true });
import { ref } from "vue";
import Icon from "~/components/UI/Icon.vue";
import { useMediaQuery } from "@vueuse/core";
// Указываем тип HTMLElement или null
const consultation = ref<HTMLElement | null>(null);

function scrollToConsultation() {
  // Проверка на null
  if (consultation.value) {
    consultation.value.scrollIntoView({ behavior: "smooth" });
  }
}

const isOpen = ref(false);

const isMobile = useMediaQuery("(max-width: 1024px)");
const activeId = ref<string | null>(null);

const toggleDropdown = (id: string) => {
  if (!isMobile.value) return;
  activeId.value = activeId.value === id ? null : id;
};
</script>
<template>
  <section class="collaboration">
    <div class="container collaboration__container">
      <h1 class="collaboration__title">
        {{ $t("collaboration.title") }}
      </h1>
      <p class="collaboration__top">
        {{ $t("collaboration.text1") }} <br />
        <span>(Edtech)</span>.
      </p>
      <p class="collaboration__text">
        {{ $t("collaboration.text2") }}
      </p>

      <p class="collaboration__text">
        {{ $t("collaboration.text3.first") }}
        <span> {{ $t("collaboration.text3.second") }}</span>
        {{ $t("collaboration.text3.third") }}
        <span> {{ $t("collaboration.text3.fourth") }}</span
        >.
      </p>
      <button
        @click="scrollToConsultation"
        class="collaboration__arrow"
      >
        <img
          src="../assets/images/arrow-down.svg"
          alt="arrow"
        />
      </button>
      <div class="collaboration__decor first">
        <picture>
          <!-- До 1024px -->
          <source
            srcset="../assets/images/tomas-2.webp"
            media="(max-width: 1024px)"
          />

          <!-- После 1024px -->
          <source
            srcset="../assets/images/tomas-3.webp"
            media="(min-width: 1025px)"
          />

          <!-- Fallback -->
          <img
            src="../assets/images/tomas-3.webp"
            alt="Tomas"
          />
        </picture>
      </div>
      <div class="collaboration__decor second">
        <img
          src="../assets/images/decor-2.svg"
          alt="Decoration"
        />
      </div>
      <div class="collaboration__decor third">
        <img
          src="../assets/images/decor-3.svg"
          alt="Decoration"
        />
      </div>
      <div
        class="collaboration__consultation"
        id="consultation"
        ref="consultation"
      >
        <div class="collaboration__consultation-top">
          <div class="center">{{ $t("collaboration.con-subtitle-top") }}</div>
          <div class="node side top-left tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text1')"
            >
              {{ $t("collaboration.top.text1.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text1'"
            >
              {{ $t("collaboration.top.text1.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.top.text1.p") }}
            </div>
          </div>
          <div class="node top-right side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text5')"
            >
              {{ $t("collaboration.top.text5.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text5'"
            >
              {{ $t("collaboration.top.text5.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.top.text5.p") }}
            </div>
          </div>
          <div class="node bottom-left side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text2')"
            >
              {{ $t("collaboration.top.text2.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text2'"
            >
              {{ $t("collaboration.top.text2.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.top.text2.p") }}
            </div>
          </div>
          <div class="node bottom-right side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text4')"
            >
              {{ $t("collaboration.top.text4.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text4'"
            >
              {{ $t("collaboration.top.text4.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.top.text4.p") }}
            </div>
          </div>
          <div class="node bottom-center tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-horizontal-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text3')"
            >
              {{ $t("collaboration.top.text3.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text3'"
            >
              {{ $t("collaboration.top.text3.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.top.text3.p") }}
            </div>
          </div>
        </div>
        <div class="collaboration__features">
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item1") }}</p>
            <Icon
              class="features-icon"
              name="con_online"
              size="32"
            />
          </div>
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item2") }}</p>
            <Icon
              class="features-icon"
              name="con_chat"
              size="32"
            />
          </div>
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item3") }}</p>
            <Icon
              class="features-icon"
              name="con_live"
              size="32"
            />
          </div>
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item4") }}</p>
            <Icon
              class="features-icon"
              name="con_lecture"
              size="32"
            />
          </div>
        </div>
        <a
          href="https://t.me/connectomas"
          target="_blank"
          class="collaboration__link"
        >
          <Icon
            class="features-icon"
            name="telegram"
            size="40"
          />
          <span>
            {{ $t("collaboration.send-to-teg") }}
          </span>
        </a>
        <div class="collaboration__consultation-bottom">
          <div class="center">{{ $t("collaboration.con-subtitle-bot") }}</div>
          <div class="node top-left side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text6')"
            >
              {{ $t("collaboration.bot.text1.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text6'"
            >
              {{ $t("collaboration.bot.text1.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.bot.text1.p") }}
            </div>
          </div>
          <div class="node top-right side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text7')"
            >
              {{ $t("collaboration.bot.text2.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text7'"
            >
              {{ $t("collaboration.bot.text2.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.bot.text2.p") }}
            </div>
          </div>
          <div class="node bottom-left side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text8')"
            >
              {{ $t("collaboration.bot.text3.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text8'"
            >
              {{ $t("collaboration.bot.text3.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.bot.text1.p") }}
            </div>
          </div>
          <div class="node bottom-right side tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text9')"
            >
              {{ $t("collaboration.bot.text4.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text9'"
            >
              {{ $t("collaboration.bot.text4.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.bot.text4.p") }}
            </div>
          </div>
          <div class="node bottom-center tooltip-or-dropdown">
            <img
              src="../assets/images/consultation-horizontal-arrow.svg"
              alt="decorate"
            />
            <span
              class="trigger"
              @click="toggleDropdown('text10')"
            >
              {{ $t("collaboration.bot.text5.title") }}
            </span>

            <div
              class="dropdown-text"
              v-if="isMobile && activeId === 'text10'"
            >
              {{ $t("collaboration.bot.text5.p") }}
            </div>

            <div
              class="tooltip-text"
              v-if="!isMobile"
            >
              {{ $t("collaboration.bot.text5.p") }}
            </div>
          </div>
        </div>
        <div class="collaboration__features">
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item5") }}</p>
            <Icon
              class="features-icon"
              name="con_miro"
              size="32"
            />
          </div>
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item6") }}</p>
            <Icon
              class="features-icon"
              name="con_presentation"
              size="32"
            />
          </div>
          <div class="collaboration__features-item">
            <p>{{ $t("collaboration.features.item7") }}</p>
            <Icon
              class="features-icon"
              name="con_text"
              size="32"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.collaboration {
  position: relative;
  &__link {
    max-width: 406px;
    width: 100%;
    margin: 80px auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px 20px;
    background-color: rgba(103, 231, 139, 1);
    transition: 0.3s all;
    color: rgba(21, 21, 21, 1);
    font-family: "Radiotechnika";
    font-size: 20px;
    line-height: 120%;
    gap: 0 10px;
    ::v-deep(svg path) {
      opacity: 1;
      fill-opacity: 1;
      fill: rgba(21, 21, 21, 1);
    }
    ::v-deep(svg g) {
      opacity: 1;
    }
    &:hover {
      box-shadow: 0px 0px 20px 0px rgba(103, 231, 139, 1);
    }

    @media screen and (max-width: 1024px) {
      font-size: 14px;
      max-width: 320px;
      padding: 10px 5px;
    }
    @media screen and (max-width: 500px) {
margin: 50px auto;
    }
  }
  &__title {
    font-family: "Radiotechnika";
    color: rgba(159, 111, 222, 1);
    font-size: 36px;
    line-height: 120%;
    width: 100%;
    margin-bottom: 30px;
    @media screen and (max-width: 500px) {
      font-size: 24px;
      margin-bottom: 40px;
      text-align: center;
    }
  }
  &__container {
  }
  &__top {
    max-width: 580px;
    width: 100%;
    font-family: "Roboto";
    font-size: 20px;
    line-height: 150%;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
    padding-bottom: 20px;
    span {
      color: rgba(103, 231, 139, 1);
    }

    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
  &__text {
    font-family: "Roboto";
    font-size: 20px;
    line-height: 150%;
    max-width: 575px;
    width: 100%;
    color: rgba(158, 158, 158, 1);
    padding: 20px 0;
    border-top: 1px solid rgba(39, 39, 39, 1);
    text-wrap: pretty;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 500px) {
      color: #fff;
      text-transform: uppercase;
      font-size: 16px;
    }
    &:last-of-type {
      border-bottom: 1px solid rgba(39, 39, 39, 1);
    }
    span {
      color: rgba(103, 231, 139, 1);
    }
  }
  &__arrow {
    margin: 50px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: float 2s ease-in-out infinite;
    cursor: pointer;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(10px);
      opacity: 0.7;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  &__decor {
    position: absolute;
    pointer-events: none;
    &.first {
      width: 100%;
      max-width: 446px;
      height: 735px;

      right: 130px;
      top: 0;

      @media screen and (max-width: 1024px) {
        top: 8%;
        max-width: 345px;
        height: 569px;
        right: 20px;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &.second {
      top: -140px;
      right: 0;
    }
    &.third {
      right: 0;
      top: 0;
      @media screen and (max-width: 768px) {
        top: 50%;
      }
    }
  }
  &__consultation {
    margin-top: 100px;
    height: 100%;
    margin-bottom: 200px;
  }
  &__consultation-top,
  &__consultation-bottom {
    position: relative;
    width: 100%;
    height: 500px;
    margin: auto;
    @media screen and (max-width: 1024px) {
      height: auto;
    }
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "Radiotechnika";
      font-size: 24px;
      line-height: 140%;
      text-transform: uppercase;
      @media screen and (max-width: 1024px) {
        position: static;
        transform: none;
        text-align: center;
        margin-bottom: 20px;
      }
    }

    .node {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0 20px;

      span:first-of-type {
        font-family: "Radiotechnika";
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        color: rgba(103, 231, 139, 1);
        max-width: 170px;
        width: 100%;
        line-height: 140%;
        min-height: 17px;
        height: auto;
        cursor: pointer;
        transition: 0.3s all;

        &:hover {
          text-shadow: 0px 0px 20px rgba(103, 231, 139, 1);
        }
      }
      &.side {
        max-width: 335px;
        width: 100%;
      }

      @media screen and (max-width: 1024px) {
        position: static;
        text-align: center !important;
        max-width: 100% !important;
        transform: translate(0) !important;
        flex-direction: column;
        margin-bottom: 40px;
        img {
          display: none !important;
          order: 3;
        }
        span:first-of-type {
          width: auto;
          max-width: 100%;
          order: 1;
        }
        span:last-of-type {
          order: 2;
        }
        .dropdown-text {
          order: 4;
          margin-top: 10;
          font-size: 14px;
          line-height: 140%;
        }
      }
    }

    .node.top-left {
      span:first-of-type {
        text-align: right;
        order: 1;
      }
      img {
        transform: translate(0, 20px);
        order: 2;
      }
      top: 25%;
      left: 15%;
    }
    .node.top-right {
      span:first-of-type {
        text-align: left;
        order: 2;
      }
      img {
        order: 1;
        transform: rotateX(180deg) rotateZ(180deg) translate(0, 20px);
      }
      top: 25%;
      right: 15%;
    }
    .node.bottom-left {
      span:first-of-type {
        text-align: right;
        order: 1;
      }
      img {
        transform: rotateX(180deg) rotateZ(0deg) translate(0, 20px);
        order: 2;
      }
      bottom: 25%;
      left: 15%;
    }
    .node.bottom-right {
      span:first-of-type {
        text-align: left;
        order: 2;
      }
      img {
        transform: rotateX(0deg) rotateZ(180deg) translate(0, 20px);
        order: 1;
      }
      bottom: 25%;
      right: 15%;
    }
    .node.bottom-center {
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column;
      gap: 20px;
    }
  }
  &__features {
    padding: 30px 60px;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 1024px) {
      padding: 20px;
      justify-content: center;
    }
    @media screen and (max-width: 500px) {
      flex-wrap: wrap;
      gap: 20px;
    }
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px 0;
      @media screen and (max-width: 500px) {
        width: calc(50% - 10px);
      }
      p {
        font-family: "Roboto";
        font-size: 12px;
        color: rgba($color: #fff, $alpha: 0.8);
        line-height: 120%;
        text-transform: uppercase;
        text-align: center;
        order: 2;
        @media screen and (max-width: 1024px) {
          font-size: 10px;
        }
      }

      .features-icon {
        ::v-deep(svg) {
          width: 32px;
          height: 32px;
        }
        order: 1;
      }
    }
  }
}
</style>
