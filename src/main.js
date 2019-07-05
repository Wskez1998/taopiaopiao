import Vue from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App";
<<<<<<< HEAD
import { Tab, Tabs, Toast, List, Search, DropdownMenu, DropdownItem  } from "vant";
=======
import { Tab, Tabs, Toast, List, Search, Field, CellGroup } from "vant";
>>>>>>> 0d072575496c93d4a912c8d577c0fb61e19ba575
import "./assets/styles/base.scss";

Vue.use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(List)
  .use(Search)
<<<<<<< HEAD
  .use(DropdownMenu)
  .use(DropdownItem);
=======
  .use(Field)
  .use(CellGroup);
>>>>>>> 0d072575496c93d4a912c8d577c0fb61e19ba575

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
