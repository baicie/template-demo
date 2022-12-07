<template>
  <a-menu
    id="nav"
    class="menu-site"
    :mode="menuMode"
    :selected-keys="[activeMenuItem]"
    disabled-overflow
  >
    <template v-for="item in navInfo" :key="item.path">
      <a-menu-item>
        <router-link :to="getLocalizedPathname(`${item.path}/index`, isZhCN)">
          {{ item.meta.title }}
        </router-link>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script lang="ts">
import { computed, defineComponent, inject, ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { GlobalConfig } from "../../App.vue";
import navInfo from "../../router/navInfo";
import { GLOBAL_CONFIG } from "../../SymbolKey";
import { getLocalizedPathname } from "../../utils/util";

export default defineComponent({
  emits: ["langChange"],
  setup() {
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const menuMode = computed(() => {
      return globalConfig.isMobile.value ? "inline" : "horizontal";
    });
    const route = useRoute();
    const activeMenuItem = ref("home");

    watch(
      () => route.path,
      (pathname) => {
        const modules = pathname.split("/");
        activeMenuItem.value = `/${modules[1]}`;
      },
      { immediate: true }
    );

    return {
      isMobile: globalConfig.isMobile,
      isZhCN: globalConfig.isZhCN,
      getLocalizedPathname,
      menuMode,
      activeMenuItem,
      // rootRoutes,
      navInfo,
    };
  },
});
</script>
<style lang="less">
@import "../../theme/theme.less";
@import "./index.less";

#nav {
  height: 100%;
  font-size: 14px;
  font-family: Avenir, @font-family, sans-serif;
  border: 0;

  &.ant-menu-horizontal {
    border-bottom: none;

    & > .ant-menu-item,
    & > .ant-menu-submenu {
      min-width: (40px + 12px * 2);
      height: @header-height;
      padding-right: 12px;
      padding-left: 12px;
      line-height: @header-height;

      &::after {
        top: 0;
        right: 12px;
        bottom: auto;
        left: 12px;
        border-width: @menu-item-border;
      }
    }

    & .ant-menu-submenu-title .anticon {
      margin: 0;
    }

    & > .ant-menu-item-selected {
      a {
        color: @primary-color;
      }
    }
  }

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    text-align: center;
  }
}

.header-link {
  color: @site-text-color;
}

.ant-menu-item-active .header-link {
  color: @primary-color;
}

// Popover menu is only used for mobile
.popover-menu {
  width: 300px;

  .ant-popover-inner-content {
    padding: 0;

    #nav {
      .ant-menu-item,
      .ant-menu-submenu {
        text-align: left;
      }

      .ant-menu-item-group-title {
        padding-left: 24px;
      }

      .ant-menu-item-group-list {
        padding: 0 16px;
      }

      .ant-menu-item,
      a {
        color: #333;
      }
    }
  }
}
</style>
