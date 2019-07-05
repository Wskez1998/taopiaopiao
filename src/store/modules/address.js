import axios from 'axios';
import { Toast } from 'vant';
import router from '@/router';

const state = {
    addressList:[],
}

const getters = {

}

const mutations = {
    setAddressList(state,payload){
        state.addressList = payload.list;
    }
}

const actions = {
    getAddress({commit}){
        Toast.loading({ duration: 0, mask: true });
        axios.get('https://m.maizuo.com/gateway/',{
            params:{
                cinemaId: router.currentRoute.params.id,
                k: 121924
            },
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15608433688083128451309"}',
                'X-Host': 'mall.film-ticket.cinema.info'
            }
        }).then(response => {
            let res = response.data;
            if(res.status === 0){
                commit({
                    type:'setAddressList',
                    list:res.data.cinema
                });
            }else{
                Toast(res.msg);
            }
        })

        Toast.clear();
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}