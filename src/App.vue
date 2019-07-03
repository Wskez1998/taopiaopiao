<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions('city', ['getCityList'])
  },
  created () {
    this.getCityList()
  }
}
</script>
