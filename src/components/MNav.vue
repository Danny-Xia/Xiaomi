<template>
  <div class="m-nav">
    <div class="m-nav-content">
      <div class="nav-content">
        <div class="logo">小米官网</div>
        <ul class="nav-list">
          <li v-if="isShowAll" class="showAllItem" @mouseenter="changeShowAllList">全部商品分类</li>
          <li
            v-for="(item, index) in navList"
            :key="item.id"
            @mouseenter="showDropList(index)"
            @mouseleave="closeDropList"
          >{{ item.title }}</li>
        </ul>

        <div class="search">
          <input
            type="text"
            @focus.prevent="inpFocus($event)"
            @blur="inpBlur($event)"
            :placeholder="inpPla"
          />
          <button id="search-btn">
            <i class="el-icon-search"></i>
          </button>
          <ul class="search-list" v-show="isShowSearchList">
            <li v-for="item in searchList" :key="item.id">{{ item.content }}</li>
          </ul>
        </div>
      </div>
    </div>
    <transition>
      <div
        class="drop-list"
        v-show="isShowDropList"
        @mouseenter="enterDrop"
        @mouseleave="closeDropList"
      >
        <ul>
          <li v-for="item in dropList[dropIndex].list" :key="item.id">
            <img :src="item.imgSrc" />
            <p class="name">{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowAllList: false,
      inpPla: "电视",
      searchList: [
        { id: 0, content: "Redmi 9 五星高品质" },
        { id: 1, content: "Redmi k30 Pro" },
        { id: 2, content: "手环" },
        { id: 3, content: "小米10" },
        { id: 4, content: "冰箱" },
        { id: 5, content: "全部商品" },
        { id: 6, content: "米家插线板 快充版 27W" },
        { id: 7, content: "Redmi 手环" }
      ],
      isShowSearchList: false,
      dropList: [
        {
          list: []
        }
      ],
      dropIndex: 0,
      isShowDropList: false,
      dropTimer: null
    };
  },
  props: ["nav-list", "isShowAll"],
  methods: {
    inpFocus(e) {
      e.target.className = "changeColor";
      document.getElementById("search-btn").className = "changeColor-btn";
      this.isShowSearchList = true;
    },
    inpBlur(e) {
      e.target.className = "";
      document.getElementById("search-btn").className = "";
      this.isShowSearchList = false;
    },
    changeShowAllList() {
      this.isShowAllList = true;
    },
    showDropList(index) {
      if (index > this.dropList.length - 1) {
        this.isShowDropList = false;
      } else {
        clearTimeout(this.dropTimer);
        setTimeout(() => {
          this.dropIndex = index;
          this.isShowDropList = true;
        }, 200);
      }
    },
    closeDropList() {
      this.dropTimer = setTimeout(() => {
        this.isShowDropList = false;
      }, 200);
    },
    enterDrop() {
      clearTimeout(this.dropTimer);
    }
  },
  created() {
    this.$api.getDropList().then(res => {
      this.dropList = res.data.dropList;
    });
    const arr = ["电视", "耳机", "手环", "小米10", "冰箱", "洗衣机"];
    let i = 0;
    setInterval(() => {
      if (i >= arr.length - 1) {
        i = 0;
      } else {
        i++;
      }
      this.inpPla = arr[i];
    }, 3000);
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/nav.less";
</style>

