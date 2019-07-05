<template>
    <div class="cinema-address">
        <div class="cna-ads-header">
            <router-link to="" tag="div" class="cna-ads-goback">返回</router-link>
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

</template>

<script>
import Tag from '../../components/Tag/index';
import { mapState,mapActions } from 'vuex';
export default {
    name:'cinemaaddress',
    components:{
        Tag
    },
    computed:{
        ...mapState('address',['addressList']),
    },
    methods:{
        ...mapActions('address',['getAddress']),
    },
    mounted(){
        this.getAddress();
    }
}
</script>

<style lang="scss">

@import './cinemaAddress';

</style>

