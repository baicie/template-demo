/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// declare module "*.md" {
//   import type { DefineComponent } from "vue";
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   const component: DefineComponent<any, any, any> & {
//     readonly pageDate?: PageData;
//   };
//   export default component;
// }

// declare module "@vue/runtime-core" {
//   import { I18n } from "vue-i18n";
//   interface ComponentCustomProperties {
//     $router: Router;
//     $i18n: I18n;
//   }
// }

// typings.d.ts

declare module "*.json" {
  const value: any;
  export default value;
}

interface Window {
  docsearch: any;
  notBlockEnabled: any;
}

interface Header {
  level: number;
  title: string;
  slug: string;
  content: string;
}
interface PageData {
  title: string;
  description: string;
  headers: Header[];
  frontmatter: Record<string, any>;
}
declare module "*.md" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<any, any, any> & {
    readonly pageDate?: PageData;
  };
  export default component;
}

declare module "*.svg";
