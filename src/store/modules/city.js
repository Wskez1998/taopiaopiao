import axios from 'axios'
import { Toast } from 'vant'

const state = {
  //总体城市信息,无序的
  cityList: window.localStorage.getItem("cityList") ?
    JSON.parse(window.localStorage.getItem("cityList")) :
    [],
  //输入框搜索结果
  searchVal: '',
  //当前选择的城市 id
  curCityId: window.localStorage.getItem("curCityId") ?
    window.localStorage.getItem("curCityId") - 0 :
    440300
}

const getters = {
  //当前选择的城市的 id
  curCityId(state){
    return state.cityList.find(item => item.cityId === state.curCityId)
  },

  //排序好的城市信息
  orderCities(state){
    /**
     * 原始的格式是:[ {name: 北京, pinyin: beijing}, {name: 保定, pinyin: baoding} ]
     * 需求的格式是:[ {py: B, [{name: 北京}, {name: 保定}, {name: 包头}]} ]
     */
    let result = [];
    state.cityList.forEach(city => {
      let py = city.pinyin.charAt(0).toUpperCase();
      let index = result.findIndex(item => item.py === py);
      if(index > -1) {
        result[index].list.push(city);
      }else{
        let obj = {
          py,
          list: [city]
        }
        result.push(obj)
      }
    });
    result = result.sort((a, b) => {
      return a.py.charCodeAt() - b.py.charCodeAt();
    });
    return result;
  },

  //热门城市信息
  hotCity(state){
    return state.cityList.filter(item => item.isHot)
  },

  //搜索出来的城市信息:根据城市列表cityList和输入结果searchVal
  searchList(state){
    let arr = [];
    if(state.searchVal){
      arr = state.cityList.filter(item => {
        return item.name.indexOf(state.searchVal) > -1;
      });
    }
    return arr;
  },

  //有序的索引的列表:根据 getters 中的有序的城市信息获取
  indexList(state, getters){
    return getters.orderCities.map(item => item.py)
  }
}

const mutations = {
  setCityList(state, payload) {
    state.cityList = payload.list
  },
  setcurCityId(state, payload){
    state.curCityId = payload.cityId
  },
  setSearchVal(state, payload){
    state.searchVal = payload.value
  }
}

const actions = {
  getCityList ( {state, commit} ) {
    if (state.cityList.length) {
      return;
    }
    Toast.loading({ duration: 0, mask: true, message: "定位中..." });
    axios
      .get('https://m.maizuo.com/gateway?k=766908', {
        headers: {
          'X-Client-Info': '{"a": "3000", "ch": "1002", "v": "5.0.4", "e": "15611193249204114915495"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      })
      .then( response => {
        let res = response.data;
        if ( res.status === 0 ) {
          commit({
            type: 'setCityList',
            list: res.data.cities
          })
        }else{
          Toast(res.msg)
        }
        Toast.clear()
      } )
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
