<template>
    <div class="tp-login">
        <div class="logo tb-logo"></div>
        <van-cell-group class="loginForm">
            <van-field v-model="username" placeholder="手机号/邮箱/会员名" />
            <van-field v-model="password" placeholder="请输入密码" />
        </van-cell-group>
        <div class="otherLink">
            <router-link to="/">短信验证码登录</router-link>
            <router-link to="/">免费注册</router-link>
        </div>
        <div class="fildButton">
            <button type="submit" class="btn-submit">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style lang="scss">
@import './index.scss';
</style>
