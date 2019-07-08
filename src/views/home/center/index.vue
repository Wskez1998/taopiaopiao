<template>
  <div class="tp-center">
    <router-link class="center-header" to="/seting" tag="div">
      <div class="headerinner" v-if="userInfo">
        <img :src="userInfo.avatar">
        <p>{{userInfo.nickname}}</p>
      </div>
      <div class="headerinner" v-else>
        <img src="../../../assets/images/avatar.jpg">
        <router-link to="/login" tag="p">立即登录</router-link>
      </div>
    </router-link>
    <div class="center-menu">
      <div class="ticket">
        <router-link to="/card"><i class="iconfont icon-shipin"></i>电影票</router-link>
        <router-link to="/card"><i class="iconfont icon-youhuijuan"></i>优惠券</router-link>
      </div>
      <div class="menus card">
        <router-link to="/card">
          <span>淘票票乐影卡</span>
          <i></i>
        </router-link>
      </div>
      <div class="menus help">
        <router-link to="/card">
          <span>帮助与反馈</span>
          <i>咨询票小蜜</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'center',

  computed: {
    ...mapState('user', ['userInfo'])
  },
};
</script>

<style lang="scss">
@import './index.scss'
</style>
