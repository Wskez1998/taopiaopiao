<template>
    <div class="tp-login">
        <div class="logo tb-logo"></div>
        <van-cell-group class="loginForm">
            <van-field v-model="username" placeholder="手机号/邮箱/会员名" />
            <van-field v-model="nickname" placeholder="请输入昵称" v-show="flag" />
            <van-field v-model="password" type="password" placeholder="请输入密码" />
        </van-cell-group>
        <div class="otherLink">
            <span>短信验证码登录</span>
            <span @click="isflag" v-if="!flag">免费注册</span>
            <span @click="isflag" v-else>免费登录</span>
        </div>
        <div class="fildButton">
            <button 
                v-if="!flag" 
                @click="getUserInfo({username, password})" 
                class="btn-submit"
                :disabled="!username || !password"
                >登录</button>
            <button 
                v-else 
                @click="signUp({username, password, nickname}); isflag()"
                class="btn-submit"
                :disabled="!username || !password"
                >注册</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { setTimeout } from 'timers';
export default {
    name: 'login',

    data() {
        return {
            username: '',
            password: '',
            flag: false,
            nickname: ''
        }
    },

    computed: {

    },

    methods: {
        ...mapActions('user', ['getUserInfo','signUp']),

        isflag(){
            setTimeout(() => {
                return this.flag ? this.flag = false : this.flag = true 
            }, 500)
        }
    },
}
</script>

<style lang="scss">
@import './index.scss';
</style>
