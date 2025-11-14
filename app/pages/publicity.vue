<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import Icon from "~/components/UI/Icon.vue";
import { ref, computed } from "vue";

const activeTab = ref<"all" | "read" | "listen" | "watch">("all");

function setActiveTab(tabType: "all" | "read" | "listen" | "watch") {
  activeTab.value = tabType;
}
const filteredContent = computed(() => {
  if (activeTab.value === "all") return content;
  return content.filter((item) => item.type === activeTab.value);
});
const { locale, t } = useI18n();
interface TabsItem {
  key: string; // ключ для $t
  icon: string; // имя иконки для Icon компонента
  type: string;
}

const words: TabsItem[] = [
  { key: "publicity.tab.all", icon: "none", type: "all" },
  { key: "publicity.tab.text", icon: "tab_read", type: "read" },
  { key: "publicity.tab.voice", icon: "tab_listen", type: "listen" },
  { key: "publicity.tab.video", icon: "tab_watch", type: "watch" },
];
interface ContentItem {
  date: string;
  title_ru: string;
  title_en: string;
  url: string;
  icon: string;
  type: string;
  url_text_ru: string;
  url_text_en: string;
}

const content: ContentItem[] = [
  {
    date: "16.01.24",
    title_ru:
      "Томас Гайсанов о казахстанском стендапе, менталитете и комьюнити",
    title_en:
      "Tomas Gaisanov on Kazakhstani Stand-up, Mentality, and Community",
    url: "https://the-steppe.com/lyudi/inogda-komik-grubo-shutit-i-navlekaet-na-sebya-problemy-i-kheyt-tomas-gaysanov-o-kazakhstanskom-stendape-mentalitete-i-komyuniti",
    icon: "tab_read",
    type: "read",
    url_text_ru: "Читать",
    url_text_en: "Read",
  },
  {
    date: "14.07.23",
    title_ru: "«Томас Гайсанов | Авторитет Мысли» на канале DatoKadze",
    title_en:
      "“Tomas Gaisanov | Authority of Thought” on the DatoKadze channel",
    url: "#",
    icon: "tab_watch",
    type: "watch",
    url_text_ru: "Смотреть",
    url_text_en: "Watch",
  },
  {
    date: "04.11.22",
    title_ru:
      "«ДОШ: Иса Дадаев, Идрис Газимагамадов, Томас Гайсанов | Кавказцы в кино, stand up, стереотипы» на канале Адрахман Хаджиев",
    title_en:
      "“DOSH: Isa Dadaev, Idris Gazimagomadov, Tomas Gaisanov | Caucasus Culture in Cinema, Stand-up, Stereotype” on the Adrahman Hadzhiev channel",
    url: "#",
    icon: "tab_watch",
    type: "watch",
    url_text_ru: "Смотреть",
    url_text_en: "Watch",
  },
  {
    date: "27.10.22",
    title_ru:
      "Смерть и бессмертие (Томас Гайсанов)» на подкасте “Необъяснимо и ладно”",
    title_en:
      "“Death and Immortality (Tomas Gaisanov)” on the podcast “Neobyasnimo i ladno (Unexplainable and Okay).”",
    url: "#",
    icon: "tab_listen",
    type: "listen",
    url_text_ru: "Слушать",
    url_text_en: "Listen",
  },
  {
    date: "10.08.22",
    title_ru:
      "«Томас Гайсанов: продюсер Outside Stand Up и LabelSmart l Подкаст Мигалова 16» на канале Дан Мигалов.",
    title_en:
      "“Tomas Gaisanov: Producer of Outside Stand Up and LabelSmart | Migalov 16 Podcast” on Dan Migalov’s channel.",
    url: "#",
    icon: "tab_watch",
    type: "watch",
    url_text_ru: "Смотреть",
    url_text_en: "Watch",
  },
  {
    date: "22.12.21",
    title_ru:
      "РЕДАКЦИЯ ENTER: Томас Гайсанов: «Юмор — это привлекательная упаковка, которую иногда можно наполнить чем-то важным».",
    title_en:
      "‘ENTER’ EDITORIAL TEAM: Tomas Gaisanov: “Humor is an attractive package that sometimes can be filled with something important.”",
    url: "#",
    icon: "tab_read",
    type: "read",
    url_text_ru: "Читать",
    url_text_en: "Read",
  },
  {
    date: "21.09.21",
    title_ru:
      "Продюсер Томас Гайсанов о деле Идрака, цензуре и жестокой истории в сетевом издании «Палач»",
    title_en:
      "Producer Tomas Gaisanov on the Idrak case, censorship, and a brutal story in the online publication “Palach (Executioner).”",
    url: "#",
    icon: "tab_read",
    type: "read",
    url_text_ru: "Читать",
    url_text_en: "Read",
  },
  {
    date: "29.03.21",
    title_ru:
      "«Дорогая Редакция»: Что не так со спецрепом «Кавказские пленницы»?» на канале Zoom",
    title_en:
      "“Dear Editorial Team: What’s Wrong with the Special Report ‘Kidnapping, Caucasian Style’?” on the Zoom channel",
    url: "#",
    icon: "tab_watch",
    type: "watch",
    url_text_ru: "Смотреть",
    url_text_en: "Watch",
  },
  {
    date: "20.03.21",
    title_ru:
      "Meduza: «Все вокруг смотрят и обсуждают стендап. Но как научиться в нем разбираться – и каких комиков нужно знать?»",
    title_en:
      "Meduza: “Everyone around is watching and discussing stand-up. But how do we learn to understand it – and which comedians should you know?”",
    url: "#",
    icon: "tab_read",
    type: "read",
    url_text_ru: "Читать",
    url_text_en: "Read",
  },
  {
    date: "19.08.19",
    title_ru:
      "«Продюсер комедийных шоу Томас Гайсанов» Разговор про создание собственных комедийных шоу, стендап и комиков с продюсером и сценаристом Томасом Гайсановым на подкасте “Работнички”",
    title_en:
      "“Comedy Show Producer Tomas Gaisanov” A conversation about creating your own comedy shows, stand-up, and comedians with producer and screenwriter Tomas Gaisanov on the podcast “Rabotnichki.”",
    url: "#",
    icon: "tab_listen",
    type: "listen",
    url_text_ru: "Слушать",
    url_text_en: "Listen",
  },
  {
    date: "21.11.18",
    title_ru:
      "“Вечерний Ургант”, Чилик, коллаборации” на подкасте «Денис выгуливает собаку»",
    title_en:
      "“Vesherniy Urgant (Evening Urgant),” Chilik, collaborations” on the podcast “Denis vigulivaet sobaku (Denis Walks the Dog).”",
    url: "#",
    icon: "tab_listen",
    type: "listen",
    url_text_ru: "Слушать",
    url_text_en: "Listen",
  },
];

// reactiv
</script>
<template>
  <seciton class="publicity">
    <div class="publicity__container container">
      <h1 class="publicity__title">{{ $t("publicity.title") }}</h1>
      <div class="tab__triggers">
        <button
          @click="
            setActiveTab(item.type as 'all' | 'read' | 'listen' | 'watch')
          "
          class="tab__btn"
          :class="{ 'tab__btn--active': activeTab === item.type }"
          type="button"
          v-for="(item, i) in words"
          :key="i"
        >
          <Icon
            class="tab__btn-icon"
            :name="item.icon"
          ></Icon>
          <span>{{ $t(item.key) }}</span>
        </button>
      </div>
      <div class="tab__wrapper">
        <div class="tab__content">
          <div
            class="tab__content-item"
            v-for="item in filteredContent"
            :key="item.date"
          >
            <div class="tab__content-block">
              <time
                :datetime="item.date"
                class="tab__content-date"
              >
                {{ item.date }}
              </time>
              <div class="tab__content-info">
                <h2 class="tab__content-title">
                  {{ locale === "ru" ? item.title_ru : item.title_en }}
                </h2>
                <NuxtLink
                  class="tab__content-link"
                  :to="item.url"
                >
                  {{ locale === "ru" ? item.url_text_ru : item.url_text_en }}
                </NuxtLink>
              </div>
            </div>
            <div class="tab__content-icon">
              <Icon :name="item.icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </seciton>
</template>
<style scoped lang="scss">
.publicity {
  &__container {
  }

  &__title {
    font-family: "Radiotechnika";
    color: rgba(159, 111, 222, 1);
    font-size: 36px;
    line-height: 120%;
    width: 100%;
  }
}


.tab {
  &__triggers {
    margin-top: 40px;
    display: flex;
    gap: 10px;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  &__btn {
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: center;
    padding: 7px 8px;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: 0.3s all;
    &.tab__btn--active {
      background-color: rgba(103, 231, 139, 1);
      span {
        color: rgba(21, 21, 21, 1) !important;
      }
      ::v-deep(svg path) {
        fill: rgba(21, 21, 21, 1);
      }
    }
    ::v-deep(svg path) {
      transition: 0.3s all;
    }
    &:first-of-type {
      .tab__btn-icon {
        display: none;
      }
    }

    span {
      color: rgba(126, 126, 126, 1);
      text-transform: uppercase;
      font-size: 14px;
      font-family: "Radiotechnika";
      transition: 0.3s all;
    }
  }
  &__wrapper {
    padding-right: 20px;
    // margin-right: 20px;

  }
  &__content {
    margin-top: 40px;
width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 400px !important;
    @media screen and (max-width: 768px) {
      max-height: 600px;
    }
    /* Firefox */
    // scrollbar-width: thin;
    // scrollbar-color: rgba(103, 231, 139, 1) rgba(255, 255, 255, 0.2);

    /* Chrome, Edge, Safari */
    &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.2);
    }

    &::-webkit-scrollbar-track:hover {
      background-color: #b8c0c2;
    }

    &::-webkit-scrollbar-track:active {
      background-color: #b8c0c2;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #67e78b;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #67e78b;
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: #67e78b;
    }
  }
  &__content-block {
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__content-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0 10px 0;
    @media screen and (max-width: 768px) {
      padding: 10px 0;
      margin-bottom: 15px;
      margin-right: 15px;
    }
  }

  &__content-date {
    font-family: "Radiotechnika";
    font-size: 16px;
    line-height: 140%;
    color: rgba(128, 128, 128, 1);
    // display: flex;
    // align-items: center;
    // justify-content: center;
    height: 100%;
width: 120px;
    @media screen and (max-width: 768px) {
      min-width: auto;
      width: 100%;
    }
  }

  &__content-info {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media screen and (max-width: 768px) {
      margin-top: 10px;
      //   max-width: calc(100% - 20px);
    }
  }

  &__content-title {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    line-height: 140%;
    font-family: "Roboto";
    text-wrap: pretty;
  }
  &__content-link {
    font-size: 18px;
    line-height: 140%;
    font-family: "Roboto";
    color: rgba(99, 99, 99, 1);
    text-decoration: underline;
  }
  &__content-icon {
    margin-right: 20px;
    min-width: 40px !important;
    height: 40px;
    background-color: rgba(103, 231, 139, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    ::v-deep(svg path) {
      fill: rgba(21, 21, 21, 1);
    }
  }
}
</style>
