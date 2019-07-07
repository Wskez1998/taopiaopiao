<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="item in Imglist"
                :key="item.filmId"
                @click="$emit('getFilmId',item.filmId)"
            >
                <img :src="item.poster" />
            </div>
        </div>
        <div class="sanjiaoxing"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    props:{
        Imglist:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods:{
        initSwiper(){
            this.mySwiper =  new Swiper('.swiper-container', {
                slidesPerView: 4,
                centeredSlides: true,
                slideToClickedSlide:true
            });
        }
    },
    updated(){
        this.initSwiper();
    }
}
</script>
<style lang="scss">
@import './banner';
</style>
