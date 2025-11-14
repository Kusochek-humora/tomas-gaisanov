import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2025-11-14", // рекомендовано
  modules: ["@nuxtjs/i18n"],
  css: [
    "@/assets/scss/main.scss", // сюда твой главный SCSS файл
  ],
  i18n: {
    skipSettingLocaleOnNavigate: true,
    langDir: "./locale/",
    locales: [
      { code: "en", file: "en.json", name: "EN" },
      { code: "ru", file: "ru.json", name: "RU" },
    ],
    defaultLocale: "ru",
    strategy: "prefix",
  },
});
