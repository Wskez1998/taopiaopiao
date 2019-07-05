import Vue from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App";
import { Tab, Tabs, Toast, List, Search, DropdownMenu, DropdownItem ,Field, CellGroup } from "vant";
import "./assets/styles/base.scss";

Vue.use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(List)
  .use(Search)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Field)
  .use(CellGroup);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
