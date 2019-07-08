<template>
    <div class="cinema-detail">
        <div class="cinema-information">
            <div class="cinema-name">
                <div class="cinema-name-true">{{CinemaItemList.name}}</div>
                <div class="cinema-address">
                    {{ CinemaItemList.address }}
                </div>
                <div class="list-status">
                    <div class="tpp-lbl tpp-lbl-outline-info" 
                        v-for="(item,index) in CinemaItemList.services" 
                        :key="index"
                    >
                    {{item.name}}
                    </div>
                </div>    
            </div>
            <div class="go-cna-d">
                <div class="go-address">
                    <i class="iconfont icon-location"></i>
                </div>
                <div class="go-card">
                    <i class="iconfont icon-biaoqian"></i>
                </div>
            </div>
        </div>

        <div class="cinema-banners">
            <a href="https://h5.m.taopiaopiao.com/app/mymovie/pages/bank-active/index.html" class="cardsss">
                <div class="card-text">
                    <div class="card-title">联合优惠专区</div>
                    <div class="card-content">银行、运营商特惠</div>
                </div>
                <div class="card-icon">
                    <i class="iconfont icon-card"></i>
                </div>
            </a>
        </div>

        <Banner :Imglist='Fimelistss' @getFilmId="newFilmId" />

        <Filmtime :newFilm = "getNewFilm" :cinemalist="Cinematiemlist" />
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Filmtime from '../../components/Filmtime/index';
import Banner from '../../components/Banner/banner';
export default {
    data(){
        return{
            newFilm:null,
            theNewFilmid:null
        }
    },
    name:'newcineams',
    computed:{
        ...mapState('cinemafilem',['CinemaItemList','Fimelistss','Cinematiemlist','theFimeListId','activeName']),
        getNewFilm(){
            if(this.newFilm){
                return this.newFilm[0];
            }
        }
    },
    watch:{
        activeName(newVal,oldVal){
            this.getCinemaTime(this.theNewFilmid)
        },
    },
    methods:{
        ...mapActions('cinemafilem',['getCinemaItem','getFilmslist','getCinemaTime']),
        gobackfilm(){
            this.$router.go(-1);
        },
        newFilmId(id){
            this.theNewFilmid = id;
            this.getCinemaTime(id);
            this.newFilm = this.Fimelistss.filter(item =>{
                return item.filmId == id
            })
        }
    },
    created(){
        this.getCinemaItem();
        this.getFilmslist();
    },
    mounted(){
        setTimeout(() => {
            this.getCinemaTime(this.Fimelistss[0].filmId);
            this.newFilm = this.Fimelistss.filter(item =>{
                return item.filmId == this.theFimeListId
            })
            this.theNewFilmid = this.Fimelistss[0].filmId;
        }, 1000);
    },
    components:{
        Filmtime,
        Banner
    }
}
</script>
<style lang="scss">
@import './index';
</style>

