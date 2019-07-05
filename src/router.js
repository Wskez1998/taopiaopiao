import Vue from "vue";
import Router from "vue-router";

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
          path: "center",
          component: () => import("./views/home/center.vue")
        },
        {
          path: "",
          redirect: "/films"
        }
      ]
    },
    { path: "/city", component: () => import("./views/city/index.vue") },
    { 
      name: 'film',
      path: "/film", 
      component: () => import("./views/film/index.vue") 
    },
    {
      path:'/cinema/:id/film',
      name:'cinemamoney',
      component:()=>import('./views/cinema/index.vue'),
      children:[
        {
          path:':id',
          name:'filmslist',
          component:()=>import('./views/cinema/filemslsit.vue')
        }
      ]
    },
    {
      path:'/cinema/:id',
      name:'cinemaaddress',
      component:()=>import('./views/cinema/cinemaAddress.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import("./views/login/index.vue")
    },
    { path: "*", redirect: "/" }
  ]
});
