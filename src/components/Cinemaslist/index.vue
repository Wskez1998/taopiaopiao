<template>
    <div class="cinemas-list">
        <ul class="cinema-list-ul">
            <li class="list-item" v-for="item in cinemaList" :key="item.cinemaId">
                <!-- <router-link :to="'/cinema/'+item.cinemaId+'/film'"> -->
                <router-link :to="curValue==0?'/cinema/'+item.cinemaId+'/film':'/cinema/'+item.cinemaId">
                    <h3 class="list-title-warper">
                        <div class="list-title-left">
                            <span class="list-title">{{item.name}}</span>
                        </div>
                        <span class="list-price" v-if="curValue===0">
                            {{item.lowPrice | getlowPrice}}
                            <span class="primary-color">
                                元
                                <span class="primary-normal">起</span>
                            </span>
                        </span>
                        <span class="list-price" v-else>
                            {{item.districtName}}
                        </span>
                    </h3>
                    <div class="list-address">
                        <div class="list-location">
                            {{item.address}}
                        </div>
                    </div>
                    <div class="list-status">
                        <div class="tpp-lbl tpp-lbl-outline-info">
                            退票
                        </div>
                        <div class="tpp-lbl tpp-lbl-outline-info">
                            儿童票
                        </div>
                        <div class="tpp-lbl tpp-lbl-outline-info">
                            停车
                        </div>
                    </div>    
                    <ul class="list-activity">
                        <li class="activity-item">
                            <span class="newsmovie">
                                新
                            </span>
                            <span class="newtext">特惠</span>
                        </li> 
                    </ul>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'cinemaslist',
    props:{
        cinemaList:{
            type:Array,
            default(){
                return [];
            }
        },
        curValue:{
            type:Number,
            default(){
                return 1;
            }
        }
    },
    filters:{
        getlowPrice(lowPrice = 0){
            let price = lowPrice/100;
            return price;
        }
    }
}
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
@import '~@/assets/styles/common/mixins.scss';
@import './cinema';
</style>

