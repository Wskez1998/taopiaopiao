import axios from 'axios';
import { Toast } from 'vant';
import router from '@/router';

const state = {
    CinemaItemList: [],
    Fimelistss: [],
    Cinematiemlist: [],
    theFimeListId: null,
    dateTime:(new Date(new Date().toLocaleDateString()).getTime())/1000,
    activeName:0
}

const getters = {
}

const mutations = {
    setCinemaItemList(state,payload){
        state.CinemaItemList = payload.list;
    },
    setFimelistss(state,payload){
        state.Fimelistss = payload.list;
        state.theFimeListId = payload.id
    },
    setCinematiemlist(state,payload){
        state.Cinematiemlist = payload.list;
    },
    setActiveName(state,payload){
        state.activeName = payload.ActiveType
    }
}

const actions = {
    getCinemaItem({commit}){
        Toast.loading({ duration: 0, mask: true, message: "定位中..." });
        axios.get('https://m.maizuo.com/gateway/',{
            params:{
                cinemaId: router.currentRoute.params.id,
                k: 5112358
            },
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15608433688083128451309"}',
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(response =>{
            let res = response.data;
            if(res.status === 0){
                commit({
                    type:'setCinemaItemList',
                    list:res.data.cinema
                })
            }else{
                Toast(res.msg)
            }

            Toast.clear();
        })
    },

    getFilmslist({commit}){
        axios.get('https://m.maizuo.com/gateway/',{
            params:{
                cinemaId: router.currentRoute.params.id,
                k: 7060613
            },
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15608433688083128451309"}',
                'X-Host': 'mall.film-ticket.film.cinema-show-film'
            }
        }).then(respone =>{
            let res = respone.data
            if(res.status === 0){
                commit({
                    type:'setFimelistss',
                    list:res.data.films,
                    id:res.data.films[0].filmId
                })
            }
        })
    },

    getCinemaTime({commit,state},fId){
        axios.get('https://m.maizuo.com/gateway/',{
            params:{
                filmId: fId,
                cinemaId: router.currentRoute.params.id,
                date: state.activeName === 0? state.dateTime :(state.dateTime+86400),
                k: 4412833
            },
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15608433688083128451309"}',
                'X-Host': 'mall.film-ticket.schedule.list'
            }
        }).then(response => {
            let res = response.data;
            if(res.status === 0){
                commit({
                    type:'setCinematiemlist',
                    list:res.data.schedules
                })
            }else if(res.status === 6003){
                commit({
                    type:'setCinematiemlist',
                    list: null
                })
            }else{
                Toast(res.msg)
            }
        })
    },

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}