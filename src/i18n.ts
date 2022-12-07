import { createI18n } from "vue-i18n";
// import enUS from "./theme/en-US";
import zhCN from "./theme/zh-CN";
// import { isZhCN } from "./utils/util";

const i18n = createI18n({
  legacy: false,
  // locale: isZhCN(location.pathname) ? "zh-CN" : "en-US",
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages: {
    "zh-CN": zhCN,
    // "en-US": enUS,
  },
});

export default i18n;
