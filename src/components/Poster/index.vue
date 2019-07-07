<template>
    <div class="video-header">
        <section class="poster">
            <img :src="filmDetails.poster" alt="" srcset="">
        </section>
        <section class="show-info">
            <div class="poster-wrap">
                <img :src="filmDetails.poster" alt="" srcset="">
                <span>{{FilmType.name}}中国巨幕</span>
            </div>
            <div class="info-cantainer">
                <div class="movie-name">
                    <p>{{filmDetails.name}}</p>
                </div>
                <div class="movie-detail">
                    <p>{{filmDetails.category}} {{filmDetails.nation}} / {{filmDetails.runtime}}分钟</p>
                    <p>
                        {{preDate}} 中国大陆上映 
                        <span></span>
                    </p>
                    <p>
                        58.9万人想看
                        <span>
                              / ⼤V推荐度 84%
                        </span>
                    </p>
                </div>
            </div>
        </section>
        <section class="show-remark">
            <p>淘票票评分:</p>
            <van-rate
                v-model="value"
                allow-half
                void-icon="star"
                void-color="#eee" />
            <span>{{filmDetails.grade}}分</span>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Poster',

    data() {
        return {
            value: 7.5
        }
    },

    props: {
        filmDetails: {
            type: Object,
            default() {
                return {}
            }
        },
        FilmType: {
            type: Object,
            default() {
                return {}
            }
        },
        preDate: {
            type: String,
            default() {
                return '2019-07-05'
            }
        }
    },

    computed: {
        
    },

}
</script>

<style lang="scss">
@import './index.scss'
</style>
