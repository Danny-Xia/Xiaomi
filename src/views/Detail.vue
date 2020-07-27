<template>
  <div class="details">
    <div class="details-content">
      <m-nav :isShowAll="true" class="nav" />
      <div class="menu" @mouseleave="leaveLeftMenu">
        <left-menu cur-page="details" class="menu" />
      </div>
      <tools-bar />
      <nav-bar :title="title" />
      <div class="main">
        <router-view class="view" />
      </div>
    </div>
  </div>
</template>

<script>
import MNav from "@/components/MNav";
import LeftMenu from "@/components/LeftMenu";
import ToolsBar from "@/components/ToolsBar";
import NavBar from "@/components/NavBar";
export default {
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.title = this.$route.params.id;
  },
  components: {
    MNav,
    LeftMenu,
    ToolsBar,
    NavBar,
  },
  methods: {
    leaveLeftMenu() {
      this.$store.commit("changeIsShowLeftMenu", false);
    },
  },
};
</script>

<style lang="less" scoped>
.details {
  width: 100%;
  background: #fff;
  .details-content {
    .nav {
      transform: translateX(-10px) translateY(-20px);
    }
    .menu {
      width: 1226px;
      margin: 0 auto;
    }
    .main {
      // border: 1px solid green;
    }
  }
}
</style>