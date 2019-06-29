<template>
  <div class="films">
    <div class="films_top">
      <div class="top_left">
        <router-link to="/city">
          <span class="iconfont icon-wode"></span>
          深圳
          <i class="iconfont icon-xiangxia"></i>
        </router-link>
      </div>
      <div class="top_right">
        <router-link to="/films/playing" active-class="active">正在热映</router-link>
        <router-link to="/films/soon" active-class="active">即将上映</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
.films{
  .active{
    color: #ff4d64;
  }
  .films_top{
    height: px2rem(50);
    display: flex;
    .top_left{
      width: 42%
    }
  }
}
</style>

