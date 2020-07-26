<template>
  <div class="swiper" @mouseenter="enterSwiper" @mouseleave="leaveSwiper">
    <ul>
      <li v-for="(item, index) in dataList" :key="item.id" :class="{'active': imgIndex === index}">
        <img :src="item.imgSrc" />
      </li>
    </ul>
    <div class="btns">
      <div class="btn el-icon-arrow-left" @click="prev"></div>
      <div class="btn el-icon-arrow-right" @click="next"></div>
    </div>
    <div class="sliders">
      <span
        v-for="(item, index) in dataList.length"
        :key="item"
        :class="{'active': index === imgIndex}"
        @click="handleSlider(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataList"],
  data() {
    return {
      imgIndex: 0,
      changeImgTimer: null
    };
  },
  created() {
    this.autoPlay();
  },
  methods: {
    prev() {
      this.imgIndex === 0
        ? (this.imgIndex = this.dataList.length - 1)
        : (this.imgIndex -= 1);
    },
    next() {
      this.imgIndex === this.dataList.length - 1
        ? (this.imgIndex = 0)
        : (this.imgIndex += 1);
    },
    enterSwiper() {
      clearInterval(this.changeImgTimer);
    },
    leaveSwiper() {
      this.autoPlay();
    },
    autoPlay() {
      this.changeImgTimer = setInterval(() => {
        if (this.imgIndex === this.dataList.length - 1) {
          this.imgIndex = 0;
        } else {
          this.imgIndex++;
        }
      }, 5000);
    },
    handleSlider(index) {
      this.imgIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/home/Swiper.less";
</style>

