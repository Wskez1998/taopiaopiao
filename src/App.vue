<template>
  <div id="app">
    <keep-alive :include="['home']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions('city', ['getCityList']),
  },
  created () {
    this.getCityList();
  }
}
</script>
