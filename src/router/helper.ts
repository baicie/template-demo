import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import NProgress from "nprogress";

export function beforeEach(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  console.log(`[route] from ${from.fullPath} to ${to.fullPath}`);
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();

  //   const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
  //   if (reg.test(to.path)) {
  //     return `/${encodeURIComponent(to.path)}`;
  //   }
  //   return true;
}

export function afterEach(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  if (to.path !== from.path) {
    NProgress.done();
    document.documentElement.scrollTop = 0;
  }
}
