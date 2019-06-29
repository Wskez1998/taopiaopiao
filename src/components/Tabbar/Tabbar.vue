<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item,index) in tabs"
        :key="index">
        <router-link :to="item.to" active-class="active">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    tabs: {
      type: Array,
      default () {
        return [
          {to: '/', name: '首页', icon: 'icon-wode'},
          {to: '/', name: '首页', icon: 'icon-wode'},
          {to: '/', name: '首页', icon: 'icon-wode'},
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
.tabbar{
  height: px2rem(50);
  ul{
    height: 100%;
    display: flex;
    align-items: center;
    li{
      height: 100%;
      flex: 1;
      text-align: center;
      .active{
        color: #ff4d64;
      }
      a{
        color: #777;
        height: 100%;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        i{
          font-size: px2rem(22);
          margin-top: 10px;
        }
        span{
          font-size: px2rem(14)
        }
      }
    }
  }
}
</style>

