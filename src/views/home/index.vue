<template>
  <div class="home">
    <!-- <keep-alive :include="['cinemas']"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    <Tabbar :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
export default {
  name: "home",
  data() {
    return {
      tabs: [
        { to: "/films", name: "电影", icon: "icon-shipin" },
        { to: "/cinemas", name: "影院", icon: "icon-yingyuan" },
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
