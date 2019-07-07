import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'

const state = {
  userInfo: window.localStorage.getItem("userInfo")
    ? JSON.parse(window.localStorage.getItem("userInfo"))
    : null,
};

const getters = {};

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload.info
  },
  setUserAvatar(state, payload) {
    let newUserInfo = {...state.userInfo, avatar: payload.avatar}
    state.userInfo = newUserInfo
    window.localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
  }
};

const actions = {
  //登录
  getUserInfo({commit}, payload) {
    Toast.loading({ duration: 0, message: "登录中..." });
    axios
      .post('http://123.207.88.163:7777/sign-in',payload)
        .then((response) => {
          Toast.clear()
          let res = response.data
          if(res.code === 0) {
            window.localStorage.setItem('userInfo', JSON.stringify(res.data));
            commit({
              type: 'setUserInfo',
              info: res.data
            })
            Toast('登录成功')
            setTimeout(() => {
              let redirect = router.currentRoute.query.redirect || "/center";
              router.replace(redirect)
            }, 1000)
          }else{
            Toast(res.msg)
          }
        })
  },

  //登出
  outUserInfo({commit}) {
    commit({
      type: 'setUserInfo',
      info: null
    })
    window.localStorage.removeItem('userInfo')
    window.location.reload()
  },

  //注册
  signUp({commit}, payload) {
    Toast.loading({ duration: 0, message: "注册中..." });
    axios
      .post('http://123.207.88.163:7777/sign-up',payload)
        .then((response) => {
          Toast.clear()
          let res = response.data
          if(res.code === 0) {
            Toast('注册成功')
          }else{
            Toast(res.msg)
          }
        })
  },

  //更换头像
  UpdateAvatar({commit, state}, event) {
    Toast.loading({ duration: 0, message: "加载中..." });
    let formData = new FormData;
    formData.append('userId', state.userInfo.userId);
    formData.append('avatar', event.target.files[0]);
    axios
      .post('http://123.207.88.163:7777/user/profile', formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(response => {
        Toast.clear();
        let res = response.data;
        if (res.code === 0) {
          Toast("修改成功");
          commit({ type: "setUserAvatar", avatar: res.data });
        } else {
          Toast(res.msg);
        }
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
