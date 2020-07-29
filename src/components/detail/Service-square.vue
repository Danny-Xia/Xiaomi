<template>
  <div class="service-square">
    <div class="left-inp">
      <span class="inp" @click="handleInp" :class="{'inp-active': tempSource.checked}">
        <i class="el-icon-check" :class="{'inp-active': tempSource.checked}"></i>
      </span>
    </div>
    <div class="right-content">
      <div class="icon-bao">
        <img :src="tempSource.icon" alt />
      </div>
      <div class="right-main">
        <h3>
          {{ tempSource.contentTitle }}
          <span class="h-price">{{ tempSource.price }} 元</span>
        </h3>
        <p class="des">{{ tempSource.des }}</p>
        <p class="alread-box">
          <span class="alread">
            <span class="inp" @click="handleInp" :class="{'inp-active': tempSource.checked}">
              <i class="el-icon-check" :class="{'inp-active': tempSource.checked}"></i>
            </span>
            我已阅读
            <span class="color-red">服务条款|</span>
            <span class="color-red">常见问题</span>
          </span>
          <span class="price">{{ tempSource.price }} 元</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    tempSource() {
      const name = this.dataSource; //向哪个数据块取数据
      const content = this.dataSelfSource; // 取哪一项数据
      const data = this.$store.state[name].content;
      const arr = data.filter((ele) => {
        return ele.contentTitle === content;
      });
      return arr[0];
    },
  },
  created() {
    // console.log(this.dataSource, this.dataSelfSource)
    // console.log(this.tempSource);
  },
  props: ["data-source", "data-self-source"],
  methods: {
    ...mapMutations([
      "changeCloud",
      "changeAccident",
      "changeGuarantee",
    ]),
    handleInp() {
      const name = this.dataSource; //向哪个数据块取数据
      const content = this.dataSelfSource; // 取哪一项数据

      function deepClone(obj) {
        let newObj = Array.isArray(obj) ? [] : {};
        if (obj && typeof obj === "object") {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              newObj[key] =
                obj && typeof obj[key] === "object"
                  ? deepClone(obj[key])
                  : obj[key];
            }
          }
        }
        return newObj;
      }

      let data = deepClone(this.$store.state[name]);
      data.content.forEach((ele) => {
        if (ele.contentTitle === this.tempSource.contentTitle) {
          ele.checked = !ele.checked;
        } else {
          ele.checked = false;
        }
      });
      if (name === "accident") {
        this.changeAccident(data);
      } else if (name === "guarantee") {
        this.changeGuarantee(data);
      } else if (name === "cloud") {
        this.changeCloud(data);
      }



    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/shop/serviceSquare.less";
</style>