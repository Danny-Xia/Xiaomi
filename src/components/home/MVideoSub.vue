<template>
  <div class="m-video-sub">
    <div class="m-video-sub-header">
      <div class="title">视频</div>
      <div class="check-all">
          查看全部
          <span>
              <i class="el-icon-arrow-right"></i>
          </span>
      </div>
    </div>
    <div class="m-video-sub-content">
      <ul>
        <li v-for="item in list" :key="item.id">
          <img :src="item.imgSrc" :alt="item.title" />
          <div class="play-btn">
            <i class="el-icon-caret-right"></i>
          </div>
          <h3>{{ item.title }}</h3>
          <p class="des">{{ item.des && item.des }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$api.getVideosList().then((res) => {
      this.list = res.data.videoList;
    });
  },
};
</script>

<style lang="less" scoped>
@import '@/assets/css/home/videos.less';
</style>