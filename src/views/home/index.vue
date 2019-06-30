<template>
  <div class="home">
    <router-view />
    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar/Tabbar.vue";
export default {
  name: "index",
  data() {
    return {
      tabs: [
        { to: "/films", name: "电影", icon: "icon-wode" },
        { to: "/cinemas", name: "影院", icon: "icon-wode" },
        { to: "/center", name: "我的", icon: "icon-wode" }
      ]
    };
  },
  components: {
    Tabbar
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
