// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vant/nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /locales\/.*\.ya?ml$/, // <---
        type: 'json',
        use: 'yaml-loader',
      })
    },
  },
  css: ['@/assets/main.css'],
  i18n: {
    langDir: './locales',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.yml',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.yml',
      },
    ],
  },
})
