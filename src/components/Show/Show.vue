<template>
  <div class="showing">
    <div class="show-item"
      v-for="item in details"
      :key="item.filmId">
      <div class="item-wrap">
        <div class="item-info">
          <div class="poster">
            <router-link to="/films" class="imgbox">
              <img :src="item.poster" >
              <i class="iconfont icon-wode"></i>
            </router-link>
          </div>
          <router-link to="/films" class="detail">
            <p class="title">
              <span>{{item.name}}</span>
              <i>{{item.filmType.name}}</i>
            </p>
            <p class="brief">淘票票评分&nbsp;<span>{{item.grade}}</span></p>
            <p class="brief">导演：{{item.director}}</p>
            <p class="brief">主演：{{item.actors[1].name}</p>
          </router-link>
          <div class="btn-wrap">
            <router-link to="/">购票</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show',
  props: {
    details: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
@import '~@/assets/styles/common/mixins.scss';
.showing{
  width: 100%;
  .show-item{
    @include border-bottom;
    box-sizing: border-box;
    background: #fff;
    padding-left: px2rem(15);
    .item-wrap{
      box-sizing: border-box;
      padding: px2rem(15) px2rem(15) px2rem(15) 0;
      .item-info{
        display: flex;
        .poster{
          width: px2rem(65);
          height: px2rem(95);
          background: #e2e2e2;
          border-radius: 2px;
          flex: 0 0 auto;
          .imgbox{
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            text-decoration: none;
            img{
              width: 100%;
              height: 100%;
            }
            i{
              position: absolute;
              top: 50%;
              left: 50%;
              display: block;
              width: 20px;
              height: 20px;
              margin: -10px 0 0 -10px;
            }
          }
        }
        .detail{
          display: block;
          box-sizing: border-box;
          padding: 0 px2rem(10.125);
          flex: 1 1 auto;
          overflow: hidden;
          text-decoration: none;
          line-height: 1.5;
          max-width: px2rem(210);
          p{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top: 3px;
            font-size: 13px;
            color: #666;
            span{
              color: #ff9c1c;
              font-weight: 500;
              font-size: 14px;
            }
          }
          .title{
            display: flex;
            align-items: center;
            font-size: px2rem(16);
            span{
              color: #000;
              font-weight: 500;
              flex: 0 1 auto;
              display: block;
              max-width: 100%;
            }
            i{
              display: inline-block;
              box-sizing: border-box;
              margin-left: 4px;
              padding: 0 4px;
              color: #fff;
              background: #afafaf;
              font-size: 12px;
            }
          }
        }
        .btn-wrap{
          display: flex;
          flex: 0 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          a{
            display: block;
            color: #fff;
            background-image: linear-gradient(45deg, #ff47a8, #ff2e62);
            border: 0;
            text-align: center;
            vertical-align: middle;
            box-sizing: border-box;
            height: 28px;
            line-height: 28px;
            padding: 0 13px;
            font-size: 12px;
            border-radius: 120px;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>

