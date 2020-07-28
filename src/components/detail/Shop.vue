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
            <el-carousel-item v-for="item in $store.state.shopSwiperList" :key="item.id">
              <img :src="item.imgSrc" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right-march">
          <h2>{{ title }}</h2>
          <p class="des" v-html="des"></p>
          <p class="color-red xiaomi">小米自营</p>
          <p class="price color-red">{{ $store.state.shopCurPrice }}</p>
          <div class="position">
            <p>
              <i class="el-icon-location-information"></i>
              <span class="city">
                <span>北京</span>
                <span>北京市</span>
                <span>海淀区</span>
                <span>清河街区</span>
              </span>
              <span class="color-red edit">修改</span>
            </p>
            <p class="color-red in-stock">{{ inStock }}</p>
          </div>
          <choose-square title="选择版本" :contents="edition" />
          <choose-square title="选择颜色" :contents="colors" />
          <choose-service :data-source="accident" />
          <choose-service :data-source="guarantee" />
          <choose-service :data-source="cloud" />
          <div class="settlement">
            <p class="phone-info">
              <span>{{ $store.state.phoneModel }}
              {{ $store.state.phoneROM }}
              {{ $store.state.phoneColor }}</span>
              <span class="price"> {{ $store.state.shopCurPrice }}</span>
             
            </p>
            <p class="cloud-service">
              <span>{{ $store.state.cloudCard }}</span>
              <span class="price">{{ $store.state.cloudCardPrice }}</span>
            </p>
            <p class="totalPrice color-red">总计：{{ $store.state.totalPrice }}</p>
          </div>
          <div class="settlement-btns">
            <button class="add-gwc">加入购物车</button>
            <button class="like">
              <i class="iconfont iconxin"></i>
              喜欢
            </button>
          </div>
          <div class="icons">
            <ul>
              <li v-for="item in iconsList" :key="item.id">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="price-explain">
      <div class="price-explain-content">
        <h3>价格说明</h3>
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a482afa34053b1b32ece1023475af7fb.jpeg"
        alt
      />
      </div>
    </div>
  </div>
</template>

<script>
import ChooseSquare from "./ChooseSquare";
import ChooseService from "./ChooseService";
export default {
  data() {
    return {
      
      title: "",
      inStock: "有现货",
      des: `<span class="color-red">「4GB+64GB到手价仅799元」</span> 5020mAh超长续航+18W快充 / G80高性能处理器 / 128GB大内存 / 全场景 AI 四摄 / 1080P 全高清大屏 / 6.53"水滴大屏 / 大功率扬声器 / 指纹识别+人脸解锁 / 红外遥控`,
      edition: [
        { id: "edition-1", content: "4GB+64GB", price: "799元" },
        { id: "edition-2", content: "4GB+128GB", price: "999元" },
        { id: "edition-3", content: "6GB+128GB", price: "1199元" },
      ],
      colors: [
        { id: "colors-1", content: "莲藕粉" },
        { id: "colors-2", content: "霓虹蓝" },
        { id: "colors-3", content: "墨黛青" },
        { id: "colors-4", content: "碳素黑" },
      ],
      accident: {
        title: "选择小米提供的意外保护",
        subtitle: "了解意外保护",
        content: [
          {
            contentTitle: "意外保障服务",
            des: "手机意外碎屏/进水/碾压等损害",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592308656.71955736.png",
            price: "99元",
          },
          {
            contentTitle: "碎屏保障服务",
            des: "手机意外碎屏",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592308656.71955736.png",
            price: "59元",
          },
        ],
      },
      guarantee: {
        title: "选择小米提供的延长保修",
        subtitle: "了解延长保修",

        content: [
          {
            contentTitle: "意外保修服务",
            des: "厂保延一年，性能故障免费维修",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592308656.71955736.png",
            price: "29元",
          },
        ],
      },
      cloud: {
        title: "选择小米提供的云空间服务",
        subtitle: "了解云空间服务",

        content: [
          {
            contentTitle: "云空间年卡500G",
            des: "主商品签收后，自动激活至下单账号",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572610610.24192285.jpg",
            price: "239元",
          },
          {
            contentTitle: "云空间年卡200G",
            des: "主商品签收后，自动激活至下单账号",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572610610.24192285.jpg",
            price: "159元",
          },
          {
            contentTitle: "云空间年卡50G",
            des: "主商品签收后，自动激活至下单账号",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572490766.85172472.jpg",
            price: "49元",
          },
          {
            contentTitle: "云空间年卡10G",
            des: "主商品签收后，自动激活至下单账号",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572490766.85172472.jpg",
            price: "29元",
          },
          {
            contentTitle: "云空间月卡50G",
            des: "主商品签收后，自动激活至下单账号",
            icon:
              "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572608505.8617283.jpg",
            price: "6元",
          },
        ],
      },
      iconsList: [
        {
          id: "icons1",
          icon: "el-icon-circle-check",
          title: "小米自营",
        },
        {
          id: "icons2",
          icon: "el-icon-circle-check",
          title: "小米发货",
        },
        {
          id: "icons3",
          icon: "el-icon-circle-check",
          title: "7天无理由退货",
        },
        {
          id: "icons4",
          icon: "el-icon-circle-check",
          title: "运费说明",
        },
        {
          id: "icons5",
          icon: "el-icon-circle-check",
          title: "企业信息",
        },
        {
          id: "icons6",
          icon: "el-icon-circle-check",
          title: "7天价格保护",
        },
      ],
    };
  },
  components: {
    ChooseSquare,
    ChooseService,
  },
  created() {
    // 判断是否已登陆
    const isLogin = document.cookie.indexOf("login=true") > -1;
    this.$store.commit("changeIsLogin", isLogin);
    // 根据params获取对应商品的信息，这里偷了个懒直接把数据写在这个组件里了
    console.log(this.$route.params);
    this.title = this.$route.params.id;
  },
};
</script>

<style lang="less">
@import "@/assets/css/shop/index.less";
</style>