<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="cinemalist? '没有更多了':'今天没有档期'"
            @load="onLoad"
        >
            <ul class="schedules-list">
                <li v-show="cinemalist" class="list-item" v-for="(item,index) in cinemalist" :key="index">
                    <router-link to="" class="sli-to">
                        <div class="item-wrap">
                            <div class="item-contain">
                                <span class="item-clock">{{item.showAt|getEndHour}}:{{item.showAt|getEndMinute}}</span>
                                <div class="item-other">
                                    <span class="item-type">{{item.filmLanguage}} {{item.imagery}}</span>
                                    <span class="item-price">
                                        特惠
                                        <span>{{item.marketPrice | getMoney}}</span>
                                        元
                                    </span>
                                </div>
                            </div>
                            <div class="item-contain">
                                <span class="item-end">{{item.endAt|getEndHour}}:{{item.endAt|getEndMinute}}散场</span>
                                <div class="item-other">
                                    <span class="item-hall">{{item.hallName}}</span>
                                    <span class="item-pre old">{{item.salePrice | getMoney}}元</span>
                                </div>
                            </div>
                        </div>
                        <div class="btn-wrap">
                            <span class="goupiao">购票</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </van-list>
    </div>
</template>

<<script>
export default {
    data() {
        return {
            loading: false,
            finished: true
        }
    },    
    props:{
        cinemalist:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods: {
        onLoad(){
            console.log(111)
        }
    },
    filters:{
        getMoney(price){
            return price/100;
        },
        getEndHour(time){
            let times = time*1000;
            let hours = (new Date(times)).getHours();
            return hours;
        },
        getEndMinute(time){
            let times = time*1000;
            let minutes = (new Date(times)).getMinutes();
            return minutes===0? minutes+'0':minutes;     
        }  
    }
}
</script>

<style lang="scss">
@import './index';
</style>
