<template>
    <div class="cinemas-list">
        <ul class="cinema-list-ul">
            <li class="list-item">
                <router-link to="">
                    <h3 class="list-title-warper">
                        <div class="list-title-left">
                            <span class="list-title">百誉影城（龙岗店）</span>
                        </div>
                        <span class="list-price">
                            29
                            <span class="primary-color">
                                元
                                <span class="primary-normal">起</span>
                            </span>
                        </span>
                    </h3>
                    <div class="list-address">
                        <div class="list-location">
                            龙岗区龙翔大道世贸中心D区四楼百誉世贸国际影城
                        </div>
                    </div>
                    <div class="list-status">
                        <div class="tpp-lbl tpp-lbl-outline-info" v-for="item in 3" :key="item">
                            退票
                        </div>
                    </div>    
                    <ul class="list-activity">
                        <li class="activity-item">
                            <span class="newsmovie">
                                新
                            </span>
                            <span class="newtext">特惠</span>
                        </li> 
                    </ul>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'cinemaslist'
}
</script>

<style lang="scss">
@import '~@/assets/styles/common/px2rem.scss';
@import '~@/assets/styles/common/mixins.scss';
.cinemas-list{
    .cinema-list-ul{
        .list-item{
            width: 100%;
            height: px2rem(98);
            padding: 0 px2rem(20);
            box-sizing: border-box;
            >a{
                display: block;
                height: 100%;
                color: #000;
            }

            .list-title-warper{
                margin-top: px2rem(20); 
                display: flex;
                justify-content: space-between;
                margin-bottom: px2rem(6); 
                .list-title-left{
                    width: px2rem(280);
                    height: px2rem(26);
                    .list-title{
                        font-size: px2rem(18);
                        font-weight: normal;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        vertical-align: top;
                        margin-right: 10px;
                    }
                }

                .list-price{
                    display: block;
                    width: px2rem(56);
                    height: px2rem(26);
                    line-height: px2rem(26);
                    color: #ff2e62;
                    font-size: px2rem(14);
                    font-weight: 400;
                    padding-left: px2rem(10);
                    .primary-normal{
                        color: #aaaaaa;
                    }
                }
            }

            .list-address{
                width: px2rem(300);
                height: px2rem(20);
                line-height: px2rem(20);
                .list-location{
                    font-size: px2rem(14);
                    color: #666;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .list-status{
                width: 100%;
                height: px2rem(24);
                .tpp-lbl{
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;
                    user-select: none;
                    color: #fff;
                    background-color: #999;
                    position: relative;
                    font-size: px2rem(12);
                    font-style: normal;
                    font-weight: 400;
                    white-space: nowrap;
                    height: px2rem(15);
                    line-height: px2rem(15);
                    padding: 0 px2rem(3);
                    border-radius: px2rem(2);
                    margin-right: px2rem(10);
                }
                .tpp-lbl-outline-info{
                    @include info;
                    color: #349cec;
                    background-color: transparent;
                    position: relative;
                }
            }

            .list-activity{
                width: 100%;
                height: px2rem(16);
                line-height: px2rem(14);
                .activity-item{
                    display: flex;
                    margin-top:px2rem(4); 
                    .newsmovie{
                        display: block;
                        width: px2rem(14);
                        height: px2rem(14);
                        line-height: px2rem(14);
                        text-align: center;
                        font-size: px2rem(12);
                        color: #fff;
                        background: #fe7a4c;
                        border-radius: px2rem(2);
                        margin-right: px2rem(4);
                    }
                    .newtext{
                        font-size: px2rem(12);
                        color: #999;
                    }
                }
            }

        }
    }
}
</style>

