<template>
  <div class="left-menu" id="left-menu" 
  v-show="$store.state.isShowLeftMenu"
  @mouseenter="enterLeftMenu"
  >
    <ul class="menu-list">
      <li
        v-for="(item, index) in menuList"
        :key="item.title"
        @mouseenter="openShowList(index)"
        @mouseleave="closeShowList"
      >
        <span>{{ item.title }}</span>
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
    <div
      class="show-list"
      id="menu-show-list"
      v-show="isShowList"
      @mouseenter="enterShowList"
      @mouseleave="leaveShowList"
    >
      <ul>
        <li v-for="(item,index) in showList" :key="index">
          <img :src="item.imgSrc" />
          <router-link tag="span" :to="{name: 'detail', params: {id: item.name}}">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cur-page"],
  data() {
    return {
      menuList: [],
      showList: [],
      isShowList: false,
      showListTimer: null,
      showMenu: true,
    };
  },
  created() {
    this.$api.getMenuList().then((res) => {
      if (res.statusText === "OK") {
        this.menuList = res.data.menuList;
      }
    });
  },
  mounted() {
    const div = document.getElementById("left-menu");
    if (this.curPage === "details") {
      div.className = "left-menu details";
      this.$store.commit('changeIsShowLeftMenu', false)
    } else {
      div.className = "left-menu";
      this.$store.commit('changeIsShowLeftMenu', true)
    }
  },
  methods: {
    openShowList(index) {
      clearInterval(this.showListTimer);
      this.showList = this.menuList[index].children;
      const column = this.menuList[index].column;
      const listWidth = `${248 * column}px`;
      document.getElementById("menu-show-list").style.width = listWidth;
      document
        .getElementById("menu-show-list")
        .getElementsByTagName("ul")[0].style.width = listWidth;
      this.isShowList = true;
    },
    closeShowList() {
      this.showListTimer = setTimeout(() => {
        this.isShowList = false;
      }, 100);
    },
    enterShowList() {
      clearInterval(this.showListTimer);
    },
    leaveShowList() {
      this.closeShowList();
    },
    enterLeftMenu () {
      clearTimeout(this.$store.state.closeLeftMenuTimer);
    }
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/leftMenu.less";
</style>