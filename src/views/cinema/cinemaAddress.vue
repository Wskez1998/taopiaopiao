<template>
    <van-skeleton
        :row="8"
        :loading="loading"
        :animate="animate"
    >
        <div class="cinema-address">
            <div class="cna-ads-header">
                <div @click="goBackadd" class="cna-ads-goback">返回</div>
            </div>
            <h1 class="cinemaName">{{ addressList.name }}</h1>
            <div class="address">
                <i class="iconfont icon-wode iconleft"></i>
                <span class="cna-address">{{ addressList.address }}</span>
                <i class="iconfont icon-wode jiantou"></i>
            </div>
            <div class="tel">
                <i class="iconfont icon-wode tel-iconleft"></i>
                <span class="cna-tel">{{ addressList.phone }}</span>
                <i class="iconfont icon-wode tel-jiantou"></i>
            </div>

            <Tag :services='addressList.services' />
        </div>
    </van-skeleton>
</template>

<script>
import Tag from '../../components/Tag/index';
import { mapState,mapActions } from 'vuex';
export default {
    name:'cinemaaddress',
    components:{
        Tag
    },
    data(){
        return{
            loading:true,
            animate:true
        }
    },
    computed:{
        ...mapState('address',['addressList']),
    },
    methods:{
        ...mapActions('address',['getAddress']),
        goBackadd(){
            this.$router.go(-1);
        }
    },
    created(){
        this.getAddress();
    },
    mounted(){
        setTimeout(() => {
            this.loading = false;
        }, 500);
    }
}
</script>

<style lang="scss">

@import './cinemaAddress';

</style>

