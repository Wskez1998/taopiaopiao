import axios from 'axios';
import { Toast } from 'vant';

const state = {
    cinemaList: [],
    curValue:0,
}

const getters = {
    AddressCinema(state){
        let result = [{ list: state.cinemaList, text: '全部' ,value: 0}];
        state.cinemaList.forEach(cinema=>{
            let newDistrictId = cinema.districtId;
            let newDistrictName = cinema.districtName;
            let index = result.findIndex(item=>item.newDistrictId === newDistrictId);

            if(index>-1){
                result[index].list.push(cinema);
            }else{
                let obj = {
                    text: newDistrictName,
                    value: result.length,
                    newDistrictId,
                    list:[cinema]
                }
                result.push(obj);
            }
        });
        return result;
    }
}

const mutations = {
    setCinemaList(state,payload){
        state.cinemaList = payload.list
    },
    setCurValue(state,payload){
        state.curValue = payload.value
    }
}

const actions = {
    getCinemaList({commit,state,rootState}){
        Toast.loading({ duration: 0, mask: true, message: "正在刷新..." });
        axios.get('https://m.maizuo.com/gateway',{
            params:{
                cityId: rootState.city.curCityId,
                ticketFlag: state.curValue === 0? 1:2,
                k:1022069
            },
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15608433688083128451309"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then( response => {
            let res = response.data;
            if(res.status === 0){
                commit({
                    type:'setCinemaList',
                    list:res.data.cinemas
                });
                // console.log(state.cinemaList)
            }else{
                Toast(res.msg)
            }
            Toast.clear();
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