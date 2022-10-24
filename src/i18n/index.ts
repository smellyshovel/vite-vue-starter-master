import { createI18n } from "vue-i18n";

const messages = Object.entries(import.meta.glob<Record<string, string>>("./locales/*.json", { eager: true })).reduce(
  (acc, [fileName, localeMessages]) => {
    return Object.assign(acc, {
      [fileName.match(/(\w+)\.json$/)?.[1] ?? ""]: localeMessages.default,
    });
  },
  {} as Record<string, Record<string, string>>,
);

export default createI18n({
  locale: localStorage.language || "en",
  fallbackLocale: "en",
  messages,
  legacy: false,
  globalInjection: false,
});
