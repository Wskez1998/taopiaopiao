<template>
  <div class="page-city">
    <van-search v-model="searchVal" placeholder="请输入搜索关键词" />

    <!-- 拼音检索 -->
    <div class="lv-indexlist" v-show="!searchVal">
      <ul class="lv-indexlist__content" ref="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li
                class="city-item-detail"
                v-for="item in hotCity"
                :Key="item.cityId"
                @click="handleChgCity(item)"
              >
                <div class="city-item-text">{{ item.name }}</div>
              </li>
            </ul>
          </div>
        </div>
        <li :ref="'box_' + item.py" class="lv-indexsection" v-for="item in orderCities" :Key="item.py">
          <p class="lv-indexsection__index">{{ item.py }}</p>
          <ul>
            <li
              v-for="city in item.list"
              :Key="city.cityId"
              @click="handleChgCity(city)"
            >{{ city.name }}</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="item in indexList" :key="item" @click="goTop(item)">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div class="lv-indexlist" v-show="searchVal">
      <ul class="search_box" v-show="searchList.length > 0">
        <li
          v-for="city in searchList"
          :key="city.cityId"
          @click="handleChgCity(city)"
        >{{ city.name }}</li>
      </ul>

      <div class="empty-result" v-show="!searchList.length">
        <img src="../../assets/images/loading.gif" alt />
        <p>没有找到匹配的城市</p>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  name: 'city',

  computed: {
    searchVal: {
      get(){
        return this.$store.state.city.searchVal
      },
      set(value){
        this.$store.commit({
          type: 'city/setSearchVal',
          value,
        })
      }
    },
    ...mapGetters('city', ['orderCities', 'curCityId', 'hotCity', 'searchList', 'indexList'])
  },

  methods: {
    handleChgCity(item){
      let cityId = item.cityId;
      this.$store.commit({
        type: 'city/setcurCityId',
        cityId
      })
      this.$router.back();
      window.localStorage.setItem('curCityId', cityId)
      //TODO 重新获取城市影院数据
    },
    goTop(item){
      let el = this.$refs['box_' + item][0];
      let box = this.$refs['lv-indexlist__content'];
      let offsetTop = el.offsetTop;
      box.scrollTop = offsetTop;
    }
  }
};
</script>

<style lang="scss">
  @import './index.scss'
</style>
