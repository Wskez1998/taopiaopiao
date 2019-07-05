<template>
  <div class="page-home-cinemas">
    <div class="cinemas-topbar">

      <router-link to="/city" tag="div" class="container-citybar">
        <div class="cityname">{{curCityInfo && curCityInfo.name}}</div>
        <div class="selector-i-arrow"></div>
      </router-link>

      <div class="topbar-container">

        <!-- <div class="selector-all-time">
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
        </div> -->

        <van-dropdown-menu active-color="#ff2e62">
          <van-dropdown-item v-model="value1" @change="gotTop" :options="AddressCinema" />
          <van-dropdown-item v-model="curValue" @change="getCinemaList" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>

        <div class="selector-search">
          放大
        </div>

      </div>

    </div>
    <Cinemaslist ref="list" class="list" :curValue="curValue" :cinemaList="theCinemaList"></Cinemaslist>
  </div>
</template>

<script>
import { mapState, mapActions ,mapGetters } from 'vuex';
import Cinemaslist from '../../components/Cinemaslist/index'
export default {
  name:'cinema',
  data() {
    return {
      value1: 0,
      value3: 0,
      option1: [
        { text: '全城', value: 0 },
        { text: '宝安区', value: 1 },
        { text: '龙华区', value: 2 }
      ],
      option2: [
        { text: 'APP订票', value: 0 },
        { text: '前台兑换', value: 1 },
      ],
      option3: [
        { text: '最近去过', value: 0 },
        { text: '离我最近', value: 1 },
      ],
    }
  },
  computed:{
    ...mapState('cinema',['cinemaList' , 'curValue']),
    ...mapGetters('cinema',['AddressCinema']),
    ...mapGetters('city',['curCityInfo']),
    theCinemaList(){
      return this.AddressCinema[this.value1].list
    },
    curValue: {
      get(){
        return this.$store.state.cinema.curValue;
      },
      set(value){
        this.$store.commit({
          type:'cinema/setCurValue',
          value
        })
      }
    }
  },
  watch:{
    curValue(newVal,oldVal){
      this.$refs.list.$el.scrollTop = 0;
    }
  },
  methods:{
    ...mapActions('cinema',['getCinemaList']),
    gotTop(){
      this.$refs.list.$el.scrollTop = 0;
    }
  },
  mounted(){
    this.getCinemaList();
  },
  components:{
    Cinemaslist
  },
};
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
@import '~@/assets/styles/common/mixins.scss';
.page-home-cinemas{
  display: flex;
  flex-direction: column;

  .list{
    flex: 1;
    overflow-y: auto; 
  }

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

      .van-dropdown-menu{
        // width: 100%;
        flex: 1;
        height: px2rem(42);
        font-size: px2rem(12);
        .van-dropdown-menu__title{
          width: px2rem(76);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &::after{
            right: px2rem(6);
          }
        }
      }
      
      .selector-search{
        width: px2rem(42);
        height: px2rem(42);
        font-size: px2rem(12);
        text-align: center;
        line-height: px2rem(42);
      }

    } 
  }
}

</style>
