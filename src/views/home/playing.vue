<template>
  <div class="playing">
    <Swiper :BannerList="BannerList" />
  </div>
</template>

<script>
import Swiper from "@/components/Swiper/Swiper.vue";
import Axios from 'axios'
export default {
  name: "playing",
  data(){
    return{
      BannerList:[]
    }
  },
  methods:{
    getList(){
      Axios({
        method:'GET',
        url:'https://m.maizuo.com/gateway?type=2&cityId=440300&k=4736500',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15608433688083128451309"}',
          'X-Host': 'mall.cfg.common-banner'
        }
      }).then(data=>{
        let res = data.data;
        // console.log(res);
        if(res.status == 0){
          this.BannerList = res.data;
          console.log(this.BannerList)
        }
      })
    }
  },
  mounted(){
    this.getList();
  },
  components:{
    Swiper
  }
};
</script>

<style lang="scss">
// .playing {
//   background: #777;
// }
</style>
