import Vue from "vue";
import Router from "vue-router";
import { Store } from "vuex";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/home/index.vue"),
      children: [
        {
          name: 'films',
          path: "films",
          component: () => import("./views/home/films.vue"),
        },
        {
          name: 'cinemas',
          path: "cinemas",
          component: () => import("./views/home/cinemas.vue")
        },
        {
          name: 'center',
          path: "center",
          component: () => import("./views/home/center/index.vue")
        },
        {
          path: "",
          redirect: "/films"
        }
      ]
    },
    { 
      name: 'city',
      path: "/city", 
      component: () => import("./views/city/index.vue") },
    { 
      name: 'film',
      path: "/film", 
      component: () => import("./views/film/index.vue") 
    },
    {
      name:'cinema',
      path:'cinema/:id',
      component:()=>import('./views/cinema/index.vue'),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import("./views/login/index.vue")
    },
    {
      name: 'card',
      path: '/card',
      meta: {
        isLogined: true
      },
      component: () => import("./views/card/index.vue")
    },
    {
      name: 'seting',
      path: '/seting',
      meta: {
        isLogined: true
      },
      component: () => import("./views/seting/index.vue")
    },
    { path: "*", redirect: "/" }
  ]
});


