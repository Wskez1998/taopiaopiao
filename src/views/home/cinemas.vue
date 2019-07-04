<template>
  <div class="page-home-cinemas">
    <div class="cinemas-topbar">

      <router-link to="/city" tag="div" class="container-citybar">
        <div class="cityname">北京</div>
        <div class="selector-i-arrow"></div>
      </router-link>

      <div class="topbar-container">

        <div class="selector-all-time">
          <div class="selector-nowcity all-item-style">
            <div>全城</div>
            <div></div>
          </div>
          <div class="selector-sort all-item-style">
            <div>综合排序</div>
            <div></div>
          </div>
          <div class="selector-self all-item-style">
            <div>特色</div>
            <div></div>
          </div>
        </div>

        <div class="selector-search">
          放大镜
        </div>

      </div>

    </div>

    <Cinemaslist></Cinemaslist>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import Cinemaslist from '../../components/Cinemaslist/index'
export default {
  name:'cinema',
  components:{
    Cinemaslist
  }
};
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
@import '~@/assets/styles/common/mixins.scss';
.page-home-cinemas{
  // display: flex;
  // flex-direction: column;
  .cinemas-topbar{
    @include border-bottom;
    width: 100%;
    height: px2rem(42);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container-citybar{
      display: flex;
      align-items: center;
      width: px2rem(105);
      height: 100%;
      box-sizing: border-box;
      padding-left: px2rem(42);
      background: url("//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg") no-repeat px2rem(8) 50%;
      background-size: px2rem(26); 
      .cityname{
        max-width: px2rem(50);
        height: 100%;
        font-size: px2rem(14);
        color: #666;
        line-height: px2rem(42);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: px2rem(5); 
      }
      .selector-i-arrow{
        @include arrow-down;
        width: px2rem(5);
        height: px2rem(5);
      }
    }

    .topbar-container{
      height: px2rem(42);
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .selector-all-time{
        display: flex;
          .all-item-style{
          @include border-left;
          justify-content: space-around;
          width: px2rem(75);
          height: px2rem(42);
          line-height: px2rem(42);
          font-size: px2rem(14);
          text-align: center;
          display: flex;
          justify-content: space-around;
          >div:nth-child(2){
            position: relative;
            &::after {
              position: absolute;
              top: 50%;
              right: 0;
              content: "";
              width: 0;
              height: 0;
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
              border-top: 4px solid #333;
              display: block;
              margin: -1px 0 0 -4px;
            }
          }
        }
      }
      
      .selector-search{
        flex: 1;
        font-size: px2rem(12);
      }

    } 
  }
}

</style>
