<template>
  <div ref="banner" class="tp-banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in BannerList" :key="item.bannerId">
        <img :src="item.imgUrl" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>

    <!-- 如果需要导航按钮 -->
    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar" v-if="scrollbar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Banner",

  props: {
    // 轮播项目
    BannerList: {
      type: Array,
      default() {
        return [];
      }
    },

    // 是否需要 分页器
    pagination: {
      type: Boolean,
      default: false
    },

    // 是否需要 上下 箭头
    navigation: {
      type: Boolean,
      default: false
    },

    // 是否需要 滚动条
    scrollbar: {
      type: Boolean,
      default: false
    },

    // 是否需要 无缝轮播
    loop: {
      type: Boolean,
      default: false
    },

    //是否需要循环轮播
    autoplay: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    BannerList(newVal, oldVal) {
      if (this.mySwiper) {
        // 已经被初始化
        this.mySwiper.destroy();
      }
      this.$nextTick(() => {
        this.initSwiper();
      });
    }
  },

  methods: {
    initSwiper() {
      let container = this.$refs.banner;

      this.mySwiper = new Swiper(container, {
        loop: this.loop,

        pagination: this.pagination
          ? {
              el: ".swiper-pagination"
            }
          : {},

        navigation: this.navigation
          ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          : {},

        scrollbar: this.scrollbar
          ? {
              el: ".swiper-scrollbar"
            }
          : {},
        autoplay: this.autoplay
      });
    }
  }
};
</script>

<style lang="scss">
@import "~swiper/dist/css/swiper.css";
@import "~@/assets/styles/common/px2rem.scss";

.tp-banner {
  height: px2rem(210);
  .swiper-slide {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
