<template>
  <div class="other-pub">
    <div class="other-pub-header">
      <div class="title">{{ title }}</div>
      <div class="nav">
          <ul>
              <li v-for="item in navList" 
              :key="item"
              :class="{'active': item === showItem}"
              @mouseenter="changeNav(item)"
              >{{ item }}</li>
          </ul>
      </div>
    </div>
    <div class="other-pub-content">
      <ul class="left-ul">
        <li v-for="item in leftUL" :key="item.id">
          <img :src="item.imgSrc" />
        </li>
        <li>
          <img src alt />
        </li>
      </ul>
      <ul class="content-list">
        <li v-for="item in contentList[showItem]" 
        :key="item.id"
        :class="{'space-item': item.id===''}"
        >
          <div class="img">
            <img :src="item.imgSrc" />
          </div>
          <div class="info">
            <h3>{{ item.name }}</h3>
          <p class="des">{{ item.des && item.des }}</p>
          <p class="price">
            <span class="now-price">
                {{ item.nowPrice && item.nowPrice }}
            </span>
            <del class="old-price">
                {{ item.oldPrice && item.oldPrice }}
            </del>
          </p>
          </div>
        </li>
        <div class="more" :class="{'space-more': spaceMore}">
            <div class="info">
              <p>浏览更多</p>
              <p class="hot">{{ showItem }}</p>
            </div>
            <div class="icon-arrow">
              <span><i class="el-icon-right"></i></span>
            </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      navList: [],
      leftUL: [],
      contentList: {},
      showItem: '',
      spaceMore: false
    };
  },
  props: ["data-list"],
  created() {
    this.getData().then (res => {
        this.title = res.title;
        this.navList = res.nav;
        this.leftUL = res.leftUL;
        this.contentList = res.list;
        this.showItem = res.nav[0];
        if (this.contentList[this.showItem][this.contentList[this.showItem].length - 1].id === '') {
          this.spaceMore = true;
        } else {
          this.spaceMore = false;
        }
    });
  },
  methods: {
    async getData() {
        let dataSource = null;
      if (this.dataList === "家电") {
        await this.$api.getJiadianList().then(res => {
          dataSource = res.data.dataList;
        });
      } else if (this.dataList === "智能") {
        await this.$api.getZhinengList().then(res => {
          dataSource = res.data.dataList;
        });
      } else if (this.dataList === "搭配") {
        await this.$api.getDapeiList().then(res => {
           dataSource = res.data.dataList;
        });
      } else if (this.dataList === "配件") {
        await this.$api.getPeijianList().then(res => {
           dataSource = res.data.dataList;
        });
      } else if (this.dataList === "周边") {
        await this.$api.getZhoubianList().then(res => {
           dataSource = res.data.dataList;
        });
      }
      return dataSource;
    },
    changeNav(title) {
      this.showItem = title;
    }
  }
};
</script>

<style lang="less" scoped>
@import '@/assets/css/home/other-pub.less';
</style>