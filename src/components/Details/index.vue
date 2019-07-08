<template>
    <div class="film-detail">
        <div class="descript">
            <section class="show-dec">
                <p ref="limit">{{filmDec.synopsis}}
                    <span @click="limit(flag)" v-show="flag">展开</span>
                    <span @click="limit(flag)" v-show="!flag">关闭</span>
                </p>  
            </section>
            <section class="artisis">
                <h2>演职人员</h2>
                <div class="artisis-container">
                    <a href="javascript:;" v-for="item in filmDec.actors" :key="item.name">
                        <img :src="item.avatarAddress" alt="" srcset="">
                        <dl>
                            <dt>{{item.name}}</dt>
                            <dd>{{item.role}}</dd>
                        </dl>
                    </a>
                </div>
                <a href="" class="allartis">全部演职人员</a>
            </section>
            <section class="artisis albums">
                <h2>视频和剧照</h2>
                <div class="artisis-container albums-container">
                    <a href="javascript:;" v-for="(item, index) in filmDec.photos" :key="index">
                        <img :src="item" alt="" srcset="">
                    </a>
                </div>
                <a href="" class="allartis album-all">全部剧照</a>
            </section>
            <section class="show-statistics artisis">
                <h2>票房</h2>
                <div class="artisis-container statistics-container">
                    <dl>
                        <dd>1</dd>
                        <dt>今日票房排名</dt>
                    </dl>
                    <dl>
                        <dd>暂无</dd>
                        <dt>首周票房(万)</dt>
                    </dl>
                    <dl>
                        <dd>18,884</dd>
                        <dt>累计票房(万)</dt>
                    </dl>
                </div>
                <a href="" class="allartis statisticsall">票房详情</a>
            </section>
            <section class="artisis appraise">
                <h2>观众热评</h2>
                <ul>
                    <li>全部</li>
                </ul>
                <div class="artisis-container" v-for="(item, index) in 10" :key="index">
                    <div class="appinner" >
                        <div class="appinner-title">
                            <img class="title-img" src="//gw.alicdn.com/i1/101800154934858266/TB2VCWjiVXXXXbnXpXXXXXXXXXX_!!0-mytaobao.jpg_80x80Q30.jpg_.webp" alt="" srcset="">
                            <div class="username">
                                <p>等你忘了我是谁</p>
                                <section>
                                    <i>购票:</i>
                                    <van-rate
                                        v-model="value"
                                        allow-half
                                        void-icon="star"
                                        void-color="#eee" />
                                    <span>9.0</span>
                                </section>
                            </div>
                        </div>
                        <dl class="app-content">
                            <dd>
                                就喜欢古天乐演反派；都那么冷酷帅气～刘德华决定复仇子弹上膛那一刻的眼神镜头捕捉的太到位了～～
                            </dd>
                            <dt>
                                <span>07-04 22:39</span>
                                <div>
                                    <i class="iconfont icon-dianzan11"></i>
                                    <i class="iconfont icon-xiaoxi-copy"></i>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>
                <a href="" class="allartis">全部评价</a>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Details',

    props: {
        filmDec: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    data() {
        return {
            value: 9.0,
            flag: true
        }
    },

    methods: {
        limit(flag) {
            if(flag) {
                this.$refs.limit.classList.add('limited');
                this.flag = false
            } else {
                this.$refs.limit.classList.remove('limited');
                this.flag = true
            }
        }
    },
}
</script>

<style lang="scss">
@import './index.scss'
</style>
