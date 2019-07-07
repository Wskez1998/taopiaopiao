import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'

const state = {
    filmDetail: {},
    filmType: {},
    newDate: ''
};

const getters = {
    grade(state) {
        return state.filmDetail.grade
    }
};

const mutations = {
    setFilmDetail(state, payload) {
        state.filmDetail = payload.detail
        state.filmType = payload.filmtype
        state.newDate = payload.newDate
    }
};

const actions = {
    getFilmDetail({commit, rootState}) {
        Toast.loading({ duration: 0, message: "加载中..." });
        console.log(router)
        axios
            .get('https://m.maizuo.com/gateway', {
                params: {
                    filmId: router.currentRoute.params.id,
                    k: 2421529
                },

                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15611193249204114915495"}',
                    'X-Host': 'mall.film-ticket.film.info'
                },
            })
            .then(response => {
                Toast.clear()
                let res = response.data
                if(res.status === 0) {
                    let date = new Date(res.data.film.premiereAt * 1000)
                    commit({
                        type: 'setFilmDetail',
                        detail: res.data.film,
                        filmtype: res.data.film.filmType,
                        newDate: date.toLocaleString().replace(/:\d{1,2}$/,' ')
                    })
                }
                console.log(res.data.film)
            })
    }
 
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
