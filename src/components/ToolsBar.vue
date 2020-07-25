<template>
  <div class="tool-bar">
    <ul v-if="!isSmall.isSmall" class="not-small-ul">
      <li
        v-for="item in tools"
        :key="item.title"
        @mouseenter="showErweima('open', item.title)"
        @mouseleave="showErweima('close', item.title)"
      >
        <div class="icon">
          <i :class="item.icon"></i>
        </div>
        <p>{{ item.title }}</p>
      </li>
      <el-backtop :right="0" :bottom="60" :visibility-height="800">
        <i class="iconfont iconupward"></i>
        <p>回顶部</p>
      </el-backtop>
    </ul>
    <div
      class="er-wei-ma"
      :class="{'showEr': isShowErweima}"
      @mouseenter="enterErweima"
      @mouseleave="leaveErweima"
    >
      <div class="jiao"></div>
      <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" alt />
      <p class="des">扫码领取新人百元礼包</p>
    </div>
    <ul v-if="isSmall.isSmall" class="small-ul">
      <li v-for="item in tools" 
      :key="item.icon"
       @mouseenter="showErweima('open', item.title)"
        @mouseleave="showErweima('close', item.title)">
        <i :class="item.icon"></i>
        <span v-if="item.title != '手机APP'">
          {{ item.title }}
          <span class="jiao"></span>
          </span>
      </li>
      <el-backtop :right="0" :bottom="60" :visibility-height="800">
        <i class="iconfont iconupward"></i>
        <p>
          回顶部
          <span class="jiao"></span>
          </p>
      </el-backtop>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          icon: "el-icon-mobile",
          title: "手机APP",
        },
        {
          icon: "iconfont icontubiaozhizuomoban",
          title: "个人中心",
        },
        {
          icon: "iconfont iconbuoumaotubiao46",
          title: "售后服务",
        },
        {
          icon: "iconfont iconkefu",
          title: "人工客服",
        },
        {
          icon: "iconfont icongouwuche",
          title: "购物车",
        },
      ],
      isShowErweima: false,
      timer: null,
      isSmall: {
        isSmall: false,
      },
    };
  },
  methods: {
    showErweima(type, title = "手机APP") {
      console.log(type, title)
      if (type === "open" && title === "手机APP") {
        this.isShowErweima = true;
      }
      if (type === "close" && title === "手机APP") {
        this.timer = setTimeout(() => {
          this.isShowErweima = false;
        }, 200);
      }
    },
    enterErweima() {
      clearTimeout(this.timer);
    },
    leaveErweima() {
      this.showErweima("close");
    },
  },
  created() {
    let self = this;
    window.onresize = function () {
      if (this.innerWidth < 1400) {
        self.$set(self.isSmall, "isSmall", true);
      } else {
        self.$set(self.isSmall, "isSmall", false);
      }
    };
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/tools.less";
</style>