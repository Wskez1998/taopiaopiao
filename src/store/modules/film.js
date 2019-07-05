import axios from 'axios'
import { Toast } from 'vant'

const state = {
  BannerList: [],
  filmList: [],
  filmLoading: false, //影片列表加载状态
  curFilmType: 0, //处于正在上映还是即将上映
  pageNum: 1, //当前页数
  pageSize: 20, //一次性加载多少条
  total: 1 //总的条数
};

const getters = {
  //影片的总页数
  totalPage(state) {
    return Math.ceil( state.total / state.pageSize )
  },
  //影片是否全部加载完成，true 表示加载完成
  isFinished(state, getters) {
    return state.pageNum > getters.totalPage
  },


};

const mutations = {
  setBannerList(state, payload){
    state.BannerList = payload.list
  },

  setFilmLoading(state, payload){
    state.filmLoading = payload.loading
  },

  setCurFilmType(state, payload){
    state.curFilmType = payload.value
  },

  setFilmList(state, payload){
    state.filmList = payload.List
    state.total = payload.total
  },

  setPageNum(state, payload) {
    state.pageNum = payload.num;
  }
};

const actions = {
  getBannerList({commit}) {
    axios
      .get("https://m.maizuo.com/gateway?type=2&cityId=440300&k=7580234", {
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.cfg.common-banner"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          // 成功
          commit({
            type: "setBannerList",
            list: res.data
          });
        } else {
          // 失败 TODO
          alert(res.msg);
        }
      });
  },

  getFilmList({commit, state, rootState}, isChangeFilmType){
    if (isChangeFilmType) {
      commit({ type: "setPageNum", num: 1 });
    }

    Toast.loading({ duration: 0, mask: true, message: "正在为主子加载中..." });
    axios
      .get("https://m.maizuo.com/gateway", {
        params: {
          cityId: rootState.city.curCityId,
          pageNum: state.pageNum,
          pageSize: state.pageSize,
          type: state.curFilmType === 0 ? 1 : 2,
          k: 66161
        },
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156194886142949673108"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === 0) {
          commit({
            type: "setFilmList",
            List: isChangeFilmType
              ? res.data.films
              : [...state.filmList, ...res.data.films],
            total: res.data.total
          });
        } else {
          Toast(res.msg);
        }
        commit({ type: "setFilmLoading", loading: false });
        commit({ type: "setPageNum", num: state.pageNum + 1 });
        Toast.clear();
      });
  }
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
