<template>
  <van-list>
    <div class="films">
      <Top />
      <Banner :BannerList='BannerList' pagination loop/>

    </div>
  </van-list>
</template>

<script>
import Banner from '@/components/Banner'
import Top from '@/components/Top'
import { mapState, mapActions } from 'vuex'
export default {
  name: "films",

  components: {
    Top,
    Banner
  },

  computed: {
    ...mapState('film', ['BannerList'])
  },

  methods: {
    ...mapActions('film', ['getBannerList'])
  },

  mounted () {
    this.getBannerList()
  }

};
</script>

<style lang="scss">
.films {

}
</style>
