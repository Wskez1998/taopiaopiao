<template>
  <div class="films">
    <Top />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "@/components/Top/Top.vue";
export default {
  name: "films",
  components: {
    Top,
  }
};
</script>

<style lang="scss">
.films {
}
</style>
