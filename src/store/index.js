import Vue from 'vue';
import Vuex from 'vuex';

import city from './modules/city';
import film from './modules/film';
import cinema from './modules/cinema';
import user from './modules/user';
import address from './modules/address';
import cinemafilem from './modules/cinemafilem';


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    city,
    cinema,
    user,
    address,
    cinemafilem
  }
})
