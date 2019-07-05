<template>
    <div class="cinema-detail">

        <div @click="gobackfilm" class="gobackhome">返回</div>

        <div class="header-title">{{ CinemaItemList.name }}</div>

        <div class="cinema-wrap">
            <div class="cinema-info">
                <div class="tags">
                    <div class="tagger" 
                        v-for="(item,index) in CinemaItemList.services"
                        :key="index"
                    >{{ item.name }}</div>
                </div>
                <div class="address">
                    <i class="iconfont icon-wode address-left"></i>
                    <span class="address-text">{{ CinemaItemList.address }}</span>
                    <i class="iconfont icon-wode address-right"></i>
                </div>
            </div>
        </div>

        <div class="cinema-banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in Fimelistss" :key="item.filmId">
                        <img :src="item.poster" />
                    </div>
                </div>
            </div>
            <div class="sanjiaoxing"></div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import Swiper from "swiper";
import { mapState, mapActions } from 'vuex';
export default {
    name:'newcineams',
    computed:{
        ...mapState('cinemafilem',['CinemaItemList','Fimelistss'])
    },
    methods:{
        initSwiper(){
            this.mySwiper = new Swiper(".swiper-container", {
                slidesPerView: 4,
                centeredSlides: true,
            });
        },
        ...mapActions('cinemafilem',['getCinemaItem','getFilmslist']),
        gobackfilm(){
            this.$router.go(-1);
        }
    },
    created(){
        this.getCinemaItem();
        this.getFilmslist();
    },
    mounted() {
        
    },
    updated(){
        this.initSwiper();
    }
}
</script>
<style lang="scss">
@import './index';
@import "~swiper/dist/css/swiper.css";
</style>

