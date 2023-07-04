// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  css: ["assets/css/style.css"],
  app: {
    head: {
      title: "Dostukcha",
      meta: [{ name: "description", content: "dostukcha" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: "ru",
        name: "Ru  ",
        iso: "ru-RU",
        file: "ru.js",
      },
      {
        code: "kg",
        name: "Kg",
        iso: "kg-KG",
        file: "kg.js",
      },
    ],
    defaultLocale: "ru",
    strategy: "prefix_except_default",
    langDir: "lang/",
  },
});
