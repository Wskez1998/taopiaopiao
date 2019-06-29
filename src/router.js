import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/home/index.vue'),
      children: [
        {
          path: 'films',
          component: () => import('./views/home/films.vue'),
          children: [
            { path: 'playing', component: () => import('./views/home/playing.vue') },
            { path: 'soon', component: () => import('./views/home/soon.vue') },
            { path: '', redirect: 'playing' }
          ]
        },
        {
          path: 'cinemas',
          component: () => import('./views/home/cinemas.vue')
        },
        {
          path: 'center',
          component: () => import('./views/home/center.vue')
        },
        {
          path: '',
          redirect: '/films'
        },
      ]
    },
    { path: '/city', component: () => import('./views/city/index.vue') },
    { path: '/film', component: () => import('./views/film/index.vue') },
    { path: '*', redirect: '/' }
  ]
});
