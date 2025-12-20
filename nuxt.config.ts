// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImports from "unplugin-auto-import/vite";
import Component from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "uz",
      alwaysRedirect: true,
    },
    locales: [
      {
        code: "uz",
        file: "uz-Latn-UZ/uz-Latn-UZ.json",
        language: "uz-Latn-UZ",
      },
      {
        code: "kril",
        file: "uz-Cyrl-UZ/uz-Cyrl-UZ.json",
        language: "uz-Cyrl-UZ",
      },
      { code: "ru", file: "ru-RU/ru-RU.json", language: "ru-RU" },
      { code: "en", file: "en/en.json", language: "en" },
    ],
    defaultLocale: "uz",
    langDir: "locales/",
  },

  svgo: {
    componentPrefix: "icon",
    autoImportPath: "./assets/icons/",
    defaultImport: "component",
    svgoConfig: {
      multipass: false, // Отключаем многоходовую оптимизацию
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // Отключаем ВСЕ плагины оптимизации
              removeDoctype: false,
              removeXMLProcInst: false,
              removeComments: false,
              removeMetadata: false,
              removeEditorsNSData: false,
              cleanupIds: false,
              convertColors: false,
              convertPathData: false,
              convertTransform: false,
              removeUnknownsAndDefaults: false,
              removeNonInheritableGroupAttrs: false,
              removeUselessStrokeAndFill: false,
              removeUnusedNS: false,
              cleanupNumericValues: false,
              moveElemsAttrsToGroup: false,
              moveGroupAttrsToElems: false,
              collapseGroups: false,
              mergePaths: false,
              convertShapeToPath: false,
              sortAttrs: false,
              removeTitle: false,
              removeDesc: false,
              removeEmptyContainers: false,
              removeViewBox: false,
              cleanupEnableBackground: false,
              removeHiddenElems: false,
              removeEmptyText: false,
              inlineStyles: false,
              minifyStyles: false,
            },
          },
        },
      ],
    },
  },

  imports: {
    autoImport: true,
  },

  vite: {
    ssr: {
      noExternal: ["naive-ui", "vueuc", "@css-render/vue3-ssr"],
    },

    plugins: [
      AutoImports({
        imports: [
          "vue",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar",
            ],
          },
        ],
        dts: "auto-imports.d.ts",
      }),
      Component({
        resolvers: [NaiveUiResolver()],
        dts: "components.d.ts",
      }),
    ],
  },

  modules: ["@nuxtjs/i18n", "nuxt-svgo"],
});
