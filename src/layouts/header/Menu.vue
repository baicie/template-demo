<template>
  <Navigation @langChange="onLangChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// import More from "./More.vue";
import Navigation from "./Navigation.vue";
import { version } from "ant-design-vue";
import {
  isZhCN,
  isLocalStorageNameSupported,
  getLocalizedPathname,
} from "../../utils/util";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "HeaderMenu",
  components: {
    Navigation,
    // Github,
    // More,
  },
  props: ["isMobile"],
  setup() {
    const antdVersion = ref(version);
    const route = useRoute();
    const onLangChange = () => {
      const {
        location: { pathname },
      } = window;
      const currentProtocol = `${window.location.protocol}//`;
      const currentHref = window.location.href.substr(currentProtocol.length);

      if (isLocalStorageNameSupported()) {
        localStorage.setItem("locale", isZhCN(pathname) ? "en-US" : "zh-CN");
      }

      window.location.href =
        currentProtocol +
        currentHref.replace(
          window.location.pathname,
          getLocalizedPathname(pathname, !isZhCN(pathname)).path
        );
    };

    const changeVersion = (v) => {
      location.href = `https://${v}.antdv.com${route.fullPath}`;
    };
    return {
      onLangChange,
      antdVersion,
      changeVersion,
    };
  },
});
</script>
<style lang="less" scoped></style>
