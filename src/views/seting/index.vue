<template>
    <div class="tp-seting">
        <div class="setbar avatar">
            <div>
                <img :src="userInfo.avatar" alt="" srcset="">
                <input type="file" @change="UpdateAvatar" >
                <i>更换头像</i>
            </div>
        </div>
        <div class="setbar avatar">
            <div>
                <p>{{userInfo.nickname}}</p>
                <i>更换昵称</i>
            </div>
        </div>
        <div class="setbar avatar">
            <span @click="outUserInfo">退出登录</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'seting',

    computed: {
        ...mapState('user', ['userInfo'])
    },

    methods: {
        ...mapActions("user", ['outUserInfo', 'UpdateAvatar'])
    },
}
</script>

<style lang="scss">
@import './index.scss'
</style>

