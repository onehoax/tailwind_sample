// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: "Tailwind App",
      meta: [{ name: "description", content: "Tailwind App" }],
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },
});
