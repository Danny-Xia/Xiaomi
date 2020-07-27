<template>
  <div class="home">
    <div class="home-top">
      <m-nav :isShowAll="false" />
      <div class="main">
        <left-menu cur-page="home" />
        <swiper :dataList="sWiperList" />
      </div>
      <div class="channel-box">
        <div class="channel-box-content">
          <ul class="channel-list">
            <li v-for="item in channelList" :key="item.id">
              <img :src="item.imgSrc" alt />
              <p>{{ item.title }}</p>
            </li>
          </ul>
          <ul class="promo-list">
            <li v-for="item in promoList" :key="item.id">
              <img :src="item.imgSrc" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-bottom">
      <div class="home-bottom-content">
        <shan-gou />
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17ae6ffbdd4156119e41dec7d85ebced.jpeg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <phone />
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <other-pub :data-list="'家电'" />
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59e8fc8ba9718c266882719fb4bbcedd.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <other-pub :data-list="'智能'" />
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ddec858a9371b4d7833181941520bf8b.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <other-pub :data-list="'搭配'" />
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9880db34d227b6c1df5b45cb7df4f465.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <other-pub :data-list="'配件'" />
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ddec858a9371b4d7833181941520bf8b.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <other-pub :data-list="'周边'" />>
        <advert img-src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1533&h=150&f=webp&q=90" />
        <m-video-sub />
      </div>
    </div>
    <tools-bar />
  </div>
</template>

<script>
import MNav from "@/components/MNav";
import Swiper from "@/components/home/Swiper";
import LeftMenu from "@/components/LeftMenu";
import ShanGou from '@/components/home/ShanGou';
import Phone from '@/components/home/Phone';
import OtherPub from '@/components/home/OtherPub';
import MVideoSub from '@/components/home/MVideoSub';
import Advert from '@/components/home/Advert';
import ToolsBar from '@/components/ToolsBar';
export default {
  data() {
    return {
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
      ],
      channelList: [
        {
          id: "channel-0",
          title: "小米秒杀",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
        },
        {
          id: "channel-1",
          title: "企业团购",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
        },
        {
          id: "channel-2",
          title: "F码通道",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
        },
        {
          id: "channel-3",
          title: "米粉卡",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
        },
        {
          id: "channel-4",
          title: "以旧换新",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
        },
        {
          id: "channel-5",
          title: "话费充值",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
        }
      ],
      promoList: [
        {
          id: "promo-0",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d158f243b54d5ec68dd2ac72bd24555d.jpg?w=632&h=340"
        },
        {
          id: "promo-1",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340"
        },
        {
          id: "promo-2",
          imgSrc:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"
        }
      ]
    };
  },
  components: {
    MNav,
    Swiper,
    LeftMenu,
    ShanGou,
    Phone,
    OtherPub,
    MVideoSub,
    Advert,
    ToolsBar
  },
  created () {
        const isLogin = document.cookie.indexOf('login=true') > -1;
        this.$store.commit('changeIsLogin', isLogin);
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/home/index.less";
</style>
