<template>
  <div class="service-square">
    <div class="left-inp">
      <span class="inp" @click="handleInp" :class="{'inp-active': inpActive}">
        <i class="el-icon-check" :class="{'inp-active': inpActive}"></i>
      </span>
    </div>
    <div class="right-content">
      <div class="icon-bao">
        <img
          :src="dataSource.icon"
          alt
        />
      </div>
      <div class="right-main">
        <h3>
          {{ dataSource.contentTitle }}
          <span class="h-price">{{ dataSource.price }}</span>
        </h3>
        <p class="des">{{ dataSource.des }}</p>
        <p class="alread-box">
          <span class="alread">
            <span class="inp" @click="handleInp" :class="{'inp-active': inpActive}">
              <i class="el-icon-check" :class="{'inp-active': inpActive}"></i>
            </span>
            我已阅读
            <span class="color-red">服务条款|</span>
            <span class="color-red">常见问题</span>
          </span>
          <span class="price">{{ dataSource.price }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      choose: "",
      inpActive: false,
    };
  },
  props: ["data-source"],
  methods: {
    ...mapMutations(['changeCloudCard', 'changeCloudCardPrice']),
    handleInp() {
      const doms = document.getElementsByClassName('inp-active');
      for(let i = 0; i < doms.length; i++) {
        doms[i].className = 'inp';
      }
      this.inpActive = !this.inpActive;
      console.log(this.dataSource);
      this.changeCloudCard(this.dataSource.contentTitle);
      this.changeCloudCardPrice(this.dataSource.price);

    },
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/shop/serviceSquare.less";
</style>