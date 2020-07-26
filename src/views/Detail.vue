<template>
  <div class="details">
    <div class="details-content">
        <m-nav :isShowAll="true" class="nav" />
      <div class="menu" @mouseleave="leaveLeftMenu">
        <left-menu cur-page="details" class="menu" />
      </div>
      <tools-bar />
      <div class="main">sdf</div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import MNav from "@/components/MNav";
import LeftMenu from "@/components/LeftMenu";
import ToolsBar from '@/components/ToolsBar'
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  components: {
    MNav,
    LeftMenu,
    ToolsBar
  },
  methods: {
    leaveLeftMenu() {
      console.log("====");
      this.$store.commit("changeIsShowLeftMenu", false);
    },
  },
};
</script>

<style lang="less" scoped>
.details {
  
  // border: 1px solid red;
  width: 100%;
  .details-content {
    // width: 1226px;
    // border: 1px solid red;
    // margin: 0 auto;
    .nav {
      // border: 1px solid green;
      transform: translateX(-10px) translateY(-20px);
    }
    .menu {
      width: 1226px;
      margin: 0 auto;
      // position: relative;
      // z-index: 1000;
    }
  }
}
</style>