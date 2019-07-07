<template>
  <van-list ref="filmDetail" finished-text="终于让你发现了我的底线...">
    <div class="film">
      <Poster :filmDetails="filmDetail" :FilmType="filmType" :preDate="newDate"/>
      <van-tabs sticky>
        <van-tab title="简介">
          <Details :filmDec="filmDetail" />
        </van-tab>
        <van-tab title="影评">     
        </van-tab>
        <van-tab title="更多">    
        </van-tab>
      </van-tabs>
    </div>
    <div class="action-wrap">
      <a href="">特惠购票</a>
    </div>
  </van-list>
</template>

<script>
import Poster from '@/components/Poster/index.vue'
import Details from '@/components/Details/index.vue'
import { mapActions, mapState } from 'vuex';
export default {
  name: 'film',

  components: {
    Poster,
    Details
  },

  computed: {
    ...mapState('filmDetail', ['filmDetail', 'filmType', 'newDate'])
  },

  methods: {
    ...mapActions('filmDetail', ['getFilmDetail'])
  },

  created() {
    this.getFilmDetail()
  },
};
</script>

<style lang="scss">
@import './index.scss';
</style>
