import axios from 'axios';
import { Toast } from 'vant';
import router from '@/router';

const state = {
    CinemaItemList:[],
    Fimelistss:[],
}

const getters = {
 

}

const mutations = {
    setCinemaItemList(state,payload){
        state.CinemaItemList = payload.list;
    },
    setFimelistss(state,payload){
        state.Fimelistss = payload.list;
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
                    list:res.data.films
                })
            }
            console.log(state.Fimelistss)
        })
    }

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}