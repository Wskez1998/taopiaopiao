<template>
  <div class="tp-filmlist">
    <ul>
      <li class="item" v-for="(item, index) in FilmList" :key="index">
        <router-link
          :to="'/film/' + item.filmId"
        >
          <div class="poster">
            <img :src="item.poster" alt />
          </div>
          <div class="info">
            <div class="film-name info-col">
              <span class="name">{{ item.name }}</span>
              <span class="item">{{ item.filmType.name }}</span>
            </div>
            <div
              v-show="filmType==='nowPlaying'"
              class="film-grade info-col"
              style="visibility: visible;"
            >
              <span class="label">淘票票评分</span>
              <span class="grade">{{ item.grade }}</span>
            </div>
            <div
              v-show="filmType==='comingSoon'"
              class="film-grade info-col"
              style="visibility: visible;"
            >
              <span class="grade">{{ Math.ceil(item.filmId / item.runtime) }}</span>
              <span class="label">万人想看</span>
            </div>
            <div class="film-actors info-col">
              <span class="label">主演：{{ item.actors | actorFormat }}</span>
            </div>
            <div v-show="filmType==='nowPlaying'" class="film-detail info-col">
              <span class="label">{{ item.nation }} | {{ item.runtime }}分钟</span>
            </div>
            <div v-show="filmType==='comingSoon'" class="film-detail info-col">
              <span class="label">上映日期：{{ item.premiereAt }}</span>
            </div>
          </div>
          <router-link 
            tag="div" 
            class="buy" 
            v-show="filmType==='nowPlaying'"
            :to="{
              name: 'cinemas',
              params: {
                filmId: item.filmId
              }
            }">购票</router-link>
          <router-link 
            tag="div" 
            class="buy gobuy" 
            v-show="filmType==='comingSoon'"
            :to="{
              name: 'cinemas',
              params: {
                filmId: item.filmId
              }
            }">预约</router-link>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilmList",

  props: {
    FilmList: {
      type: Array,
      default() {
        return []
      }
    },
    filmType: {
      type: String,
    }
  },

  filters: {
    actorFormat(actors = []) {
      let tmp = actors.map(item => item.name);
      return tmp.length ? tmp.join(" ") : "暂无主演";
    },
  }
};
</script>

<style lang="scss">
@import './index'
</style>
