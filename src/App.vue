<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts" setup>
import { computed, provide, ref, Ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import useMediaQuery from "./hooks/useMediaQuery";
import GLOBAL_CONFIG from "./SymbolKey";

export interface GlobalConfig {
  isMobile: Ref<boolean>;
  lang: Ref<"zh-CN" | "en-US">;
  isZhCN: Ref<boolean>;
  responsive: Ref<null | "narrow" | "crowded">;
  blocked: Ref<boolean>;
}
/** 自适应hook */
const colSize = useMediaQuery();
/** 国际化hook */
const i18n = useI18n();
/**主题 */
const theme = ref(localStorage.getItem("theme") || "default");
const isMobile = computed(
  () => colSize.value === "sm" || colSize.value === "xs"
);
const responsive = computed(() => {
  if (colSize.value === "xs") {
    return "crowded";
  } else if (colSize.value === "sm") {
    return "narrow";
  }
  return null;
});

const globalConfig: GlobalConfig = {
  isMobile,
  responsive,
  lang: computed<any>(() => i18n.locale.value),
  isZhCN: computed(() => i18n.locale.value === "zh-CN"),
  blocked: ref(false),
};

const changeTheme = (t: string) => {
  theme.value = t;
  localStorage.setItem("theme", t);
};
// 全局提供主题相关
provide("themeMode", {
  theme,
  changeTheme,
});

provide(GLOBAL_CONFIG, globalConfig);

const locale = computed(() => {
  return globalConfig.isZhCN.value ? "zhCN" : "enUS";
});

setTimeout(() => {
  const div = document.createElement("div");
  div.className = "adsbox";
  document.body.appendChild(div);
  globalConfig.blocked.value = "none" === getComputedStyle(div).display;
}, 300);

watch(
  theme,
  () => {
    if (theme.value === "dark") {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-doc-theme", "dark");
      document
        .getElementsByTagName("body")[0]
        .setAttribute("data-theme", "dark");
      document.getElementsByTagName("html")[0].style.colorScheme = "dark";
    } else {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-doc-theme", "light");
      document
        .getElementsByTagName("body")[0]
        .setAttribute("data-theme", "light");
      document.getElementsByTagName("html")[0].style.colorScheme = "light";
    }
  },
  { immediate: true }
);
</script>
<!-- <style lang='less' scoped></style> -->
