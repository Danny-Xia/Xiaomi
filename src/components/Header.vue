<template>
  <div class="m-header">
    <el-row>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <ul class="left-menu">
            <li v-for="item in leftMenuList" :key="item">{{ item }}</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <ul class="right-menu">
            <router-link :to="item.path" tag="li" v-for="item in rightMenuList" :key="item.path">{{ item.name }}</router-link>
            <li class="gwc" id="gwc" @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
              <i class="el-icon-shopping-cart-2"></i>
              购物车
              <span>({{ gwcNum }})</span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      leftMenuList: [
        "小米商城",
        "MIUI",
        "loT",
        "云服务",
        "金融",
        "有品",
        "小爱开放平台",
        "企业团购",
        "资质证照",
        "协议规则",
        "下载app",
        "Select Location"
      ],
      rightMenuList: [{
        name: '登录',
        path: '/login'
      }, {
        name: '注册',
        path: '/register'
      }, {
        name: '消息通知',
        path: '#'
      }],
      gwcNum: 0
    };
  },
  methods: {
    ...mapMutations(["changeIsShowTimer"]),
    ...mapActions(["changeIsShowDrop"]),
    mouseEnter(e) {
      const obj = {
        e,
        className: 'gwc active',
        isShow: true
      };
      this.changeIsShowDrop(obj);
    },
    mouseLeave(e) {
      const obj = {
        e,
        className: 'gwc',
        isShow: false
      };
      this.changeIsShowDrop(obj);
    }
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/header/index.less";
</style>