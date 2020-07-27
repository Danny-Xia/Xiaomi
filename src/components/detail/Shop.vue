<template>
  <div class="shop">
    <p class="is-login" v-if="$store.state.isLogin">
      为方便您购买，请提前登录
      <router-link tag="span" to="/login" class="to-login">立即登录</router-link>
      <span class="close el-icon-close"></span>
    </p>
    <div class="shop-content">
      <div class="commodity">
        <div class="left-swiper">
          <el-carousel trigger="click" height="565px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right-march"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    const isLogin = document.cookie.indexOf("login=true") > -1;
    this.$store.commit("changeIsLogin", isLogin);
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/shop/index.less";
</style>