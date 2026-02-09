// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-02-09',
  modules: ['@vant/nuxt'], // ✅ 直接引入模块
  devtools: { enabled: true },
})
