<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div
            v-for="(item) in BannerList"
            :key="item.bannerId"
          class="swiper-slide">
          <img :src="item.imgUrl" />
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
  name: "Swiper",
  props:{
    BannerList:{
      type:Array
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      autoplay: {
        delay: 1000,
        // stopOnLastSlide: true,
        disableOnInteraction: false,
      },
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    }) 
  },
};
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 210px;
    .swiper-slide{
      img{
        width: 100%;
        height: 210px;
      }
    }
}
</style>
