import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.variable.min.css";
import "docsearch.js/dist/cdn/docsearch.css";
import "nprogress/nprogress.css";
import { createApp, Transition, TransitionGroup, version } from "vue";
// import "../../components/style";
import App from "./App.vue";
import i18n from "./i18n";
import "./index.less";
import router from "./router";

console.log("vue version: ", version);
console.log("ant design vue version: ", Antd.version);

const app = createApp(App);

app.component("Transition", Transition);
app.component("TransitionGroup", TransitionGroup);

app.component("VNodes", function (_, { attrs: { value } }) {
  return value;
});

app.use(router);
// app.use(store);
app.use(i18n);
app.use(Antd);

// app.config.globalProperties.$i18n = i18n;

app.mount("#app");
