<template>
    <div class="showtime">
        <!-- 头部 -->
        <div class="movie-name">
            <router-link to="" class="name-title">
                <span class="showname">{{newFilm.name}}</span>
                <span>淘票票评分</span>
                <span class="show-star-remark">
                    &nbsp;
                    <span class="star-remark">{{newFilm.grade}}</span>
                </span>
                <p>{{newFilm.runtime}}分钟 | {{newFilm.category}} | {{newFilm.actors|getActor}}</p>
            </router-link>
        </div>
        <!-- 头部end -->
        <!-- 弹出层 -->
        <van-button type="primary" @click="showPopup">
            <div class="tag-left">
                惠
            </div>
            <div class="title">特惠抢票，名额有限抢完即止</div>
            <!-- <div class="sub-title">2个活动</div> -->
        </van-button>
        <van-popup
            class="mian-contents"
            v-model="show"
            position="bottom"
            :style="{ height: '50%' }"
            :duration='0.2'
        >
        <h2 class="title-s">可参加的优惠活动</h2>
        <ul>
            <li class="van-button__text">
                <div class="tag-left">
                惠
                </div>
                <div class="title">特惠抢票，先到先得</div>
            </li>
            <li class="van-button__text">
                <div class="tag-left">
                惠
                </div>
                <div class="title">特惠抢票，名额有限抢完即止</div>
            </li>
        </ul>
        </van-popup>
        <!-- 弹出层end -->

        <van-tabs v-model="activeName" :line-height='1' :line-width='20'>
            <van-tab title="当天" name="0">
                <List :cinemalist='cinemalist' />
            </van-tab>
            <van-tab title="明天" name="1">
                <List :cinemalist='cinemalist' />
            </van-tab>
        </van-tabs>


    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import List from './list'
export default {
    data() {
        return {
            show: false,
        }
    },
    props:{
        cinemalist:{
            type:Array,
            default(){
                return [];
            }
        },
        newFilm:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    computed:{
        // ...mapState('cinemafilem',['activeName']),
        activeName:{
            get(){
                return this.$store.state.cinemafilem.activeName
            },
            set(value){
                this.$store.commit({
                    type: 'cinemafilem/setActiveName',
                    ActiveType: value
                })
            }
        }
    },
    methods:{
        showPopup() {
            this.show = true;
        },
    },
    components:{
        List
    },
    filters:{
        getActor(actor=[]){
            let tmp = actor.map(item => item.name)
            return tmp.join(' ');
        }
    }    
}
</script>


<style lang="scss">
@import './index';
</style>
