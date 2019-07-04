<template>
  <van-list ref="filmBox" v-model="filmLoading" @load="getFilmList" :finished="isFinished" finished-text="终于让你发现了我的底线...">
    <div class="films">
      <Top :curCityInfo="curCityInfo" />
      <Banner class="banner" :BannerList='BannerList' pagination loop/>
      <van-tabs sticky v-model="curFilmType">
        <van-tab title="正在热映">
          <FilmList filmType="nowPlaying" :FilmList="filmList"></FilmList>
        </van-tab>
        <van-tab title="即将上映">
          <FilmList filmType="comingSoon" :FilmList="filmList"></FilmList>
        </van-tab>
      </van-tabs>
    </div>
  </van-list>
</template>

<script>
import Top from '@/components/Top'
import Banner from '@/components/Banner'
import FilmList from '@/components/Filmlist'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: "films",

  components: {
    Top,
    Banner,
    FilmList
  },

  watch: {
    curFilmType(newVal, oldVal){
      this.$refs.filmBox.$el.scrollTop = 0
      this.getFilmList(true) 
    }
  },

  computed: {
    ...mapState('film', ['BannerList', 'filmList']),
    ...mapGetters('film', ['isFinished']),
    ...mapGetters('city', ['curCityInfo']),

    filmLoading: {
      get(){
        return this.$store.state.film.filmLoading
      },
      set(value){
        this.$store.commit({
          type: 'film/setFilmLoading',
          value
        })
      }
    },

    curFilmType: {
      get(){
        return this.$store.state.film.curFilmType
      },
      set(value){
        this.$store.commit({
          type: 'film/setCurFilmType',
          value
        })
      }
    },

  },

  methods: {
    ...mapActions('film', ['getBannerList', 'getFilmList']),
  },

  created() {
    this.getBannerList()
  } 

};
</script>

<style lang="scss">
.films {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
