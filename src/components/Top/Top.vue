<template>
  <div class="films_top">
    <div class="top_left">
      <router-link to="/city">
        <span class="iconfont icon-wode"></span>
        深圳
        <i class="iconfont icon-xiangxia"></i>
      </router-link>
    </div>
    <div class="top_right">
      <ul>
        <li>
          <router-link to="/films/playing" active-class="active"
            >正在热映</router-link
          >
        </li>
        <li>
          <router-link to="/films/soon" active-class="active"
            >即将上映</router-link
          >
        </li>
      </ul>
      <div class="tab" :class="{ move: $route.path === '/films/soon' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style lang="scss">
@import "~@/assets/styles/common/px2rem.scss";
@import "~@/assets/styles/common/mixins.scss";
.films_top {
  height: px2rem(50);
  display: flex;
  .top_left {
    width: 42%;
    a {
      text-decoration: none;
      line-height: px2rem(50);
      font-size: px2rem(16);
      color: #333;
      display: block;
      height: 100%;
      font-weight: 700;
      margin-left: 20px;
      span {
        color: #ff4d64;
        font-size: px2rem(22);
        font-weight: normal;
      }
      i {
        @include arrow-down;
      }
    }
  }
  .top_right {
    position: relative;
    overflow: hidden;
    .active {
      color: #ff4d64;
      font-weight: 700;
    }
    ul {
      display: flex;
      li {
        a {
          line-height: px2rem(50);
          text-decoration: none;
          font-size: px2rem(18);
          color: #777;
          display: block;
          padding: 0 px2rem(10);
        }
      }
    }
    .tab {
      width: 16px;
      height: 2px;
      background: #ff4d64;
      position: absolute;
      bottom: 3px;
      left: 0;
      transform: translate3d(39px, 0px, 0px);
      transition: 0.3s;
    }
    .move {
      transform: translate3d(133px, 0px, 0px);
    }
  }
}
</style>
