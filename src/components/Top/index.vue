<template>
  <div class="films_top">
    <div class="top_left">
      <router-link to="/city" tag="div" class="logo">
        <span class="iconfont icon-wode"></span>
        <i>深圳</i>
        <div></div>
      </router-link>
    </div>
    <div class="top_middle">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <router-link to="/" tag="div" class="message">
      <i class="iconfont icon-pinglun"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    value: {
      type: String,
      default(){
        return ''
      }
    }
  }
};
</script>

<style lang="scss">
@import './index.scss';
</style>
