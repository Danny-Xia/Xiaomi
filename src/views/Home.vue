<template>
  <div class="home">
    <!-- <div class="home-main"> -->
    <m-nav :nav-list="navList" :isShowAll="false" />
    <div class="main">
      <left-menu cur-page="home"  />
      <swiper :dataList="sWiperList" />
    </div>
    <div>
      <ul class="home-channel-list"></ul>
      <ul class="imgs-3">
        <img src />
      </ul>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import MNav from "@/components/MNav";
import Swiper from "@/components/home/Swiper";
import LeftMenu from "@/components/LeftMenu";
export default {
  data() {
    return {
      navList: [
        {
          id: 0,
          title: "小米手机"
        },
        {
          id: 1,
          title: "Redmi红米"
        },
        {
          id: 2,
          title: "电视"
        },
        {
          id: 3,
          title: "笔记本"
        },
        {
          id: 4,
          title: "家电"
        },
        {
          id: 5,
          title: "路由器"
        },
        {
          id: 6,
          title: "智能硬件"
        },
        {
          id: 7,
          title: "服务"
        },
        {
          id: 8,
          title: "社区"
        }
      ],
      sWiperList: [
        {
          id: "swiper_1",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ade887b241d057d81e2de96590a1a6f.jpg?w=2452&h=920"
        },
        {
          id: "swiper_2",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a82846d975204e12923de52add19339.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        },
        {
          id: "swiper_3",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/be3a556e9cd1896f049c122a8bab3ce2.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        },
        {
          id: "swiper_4",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad9c1cb79a2eeb2d5ccf54dfa9782032.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        },
        {
          id: "swiper_5",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ef43cf9f138a7fc3a39273d7e3d13b6.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
        }
      ]
    };
  },
  components: {
    MNav,
    Swiper,
    LeftMenu
  }
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100vw;
  min-width: 1226px;
  background-color: #fff;
  top: -20px;
}
.home-main {
  /* position: relative; */
  /* width: 1226px; */
  /* margin: 0 auto; */
}
.main {
  width: 1226px;
  margin: 0 auto;
  position: relative;
  left: -10px;
}
</style>
