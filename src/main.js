import Vue from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App";
import { Tab, Tabs, Toast, List, Search, DropdownMenu, DropdownItem ,Field, CellGroup, Skeleton, Popup, Button, Rate  } from "vant";
import "./assets/styles/base.scss";

Vue.use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(List)
  .use(Search)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Field)
  .use(CellGroup)
  .use(Skeleton)
  .use(Popup)
  .use(Button)
  .use(Rate);

  router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if(to.meta.isLogined && !store.state.user.userInfo) {
      return next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    next()
  })

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
