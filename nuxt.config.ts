export default defineNuxtConfig({
  compatibilityDate: '2026-02-09', // 显式指定
  css: ['vant/lib/index.css'],
  build: {
    transpile: ['vant']
  }
})
