<template>
  <div class="shan-gou">
    <div class="shan-gou-header">
      <div class="title">小米闪购</div>
      <div class="btns">
        <span
          :class="{
          'el-icon-arrow-left': true,
          'disabled': prevDisabled
        }"
          @click="prev"
        ></span>
        <span
          :class="{
          'el-icon-arrow-right': true, 
        'disabled': nextDisabled}"
          @click="next"
        ></span>
      </div>
    </div>
    <div class="shan-gou-content" @mouseenter="enterShangou" @mouseleave="leaveShangou">
      <div class="seckill">
        <p class="sessions">{{ sessions + ":00 场" }}</p>
        <p class="shandian">
          <img
            src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ%0AbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp%0Abj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6%0AeD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1%0AMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo%0AdHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw%0AdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv%0AIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS%0AZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD%0AcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j%0AZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1%0AbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N%0AOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy%0AQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF%0AOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht%0AcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE%0AcHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf%0AS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY%0AjRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN%0AJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL%0AijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7%0AKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L%0AbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc%0AxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V%0AkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU%0AKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E%0AcnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ%0A7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
            alt
          />
        </p>
        <p class="surplus">距离结束还有</p>
        <p class="time-box">
          <span class="time">{{ '0' + overTimeHours }}</span>
          <span class="time-box-other">:</span>
          <span class="time">{{ overTimeMinute }}</span>
          <span class="time-box-other">:</span>
          <span class="time">{{ overTimeSecond }}</span>
        </p>
      </div>
      <div class="shan-swiper">
        <ul id="shan-swiper-content" :style="'left:' + oUlLeft + 'px'" @transitionend="handleLock">
          <li
            v-for="(item,index) in shangouList"
            :key="item.id"
            :data-index="index"
            :class="`shan-swiper-item-${index}`"
          >
            <div>
              <img :src="item.imgSrc" alt />
            </div>
            <h3>{{ item.title }}</h3>
            <p class="des">{{ item.des }}</p>
            <p class="price">
              <span class="nowPrice">{{ item.nowPrice }}</span>
              <span class="oldPrice">
                <del>{{ item.oldPrice }}</del>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessions: "20:00",
      overTimeHours: 1,
      overTimeMinute: 59,
      overTimeSecond: 59,
      shangouList: [], // 数据列表
      nowPage: 1, // 当前页
      totalPage: 1, // 总页数
      remainder: 0, // 最后一页剩余得li个数
      autoMoveTimer: null, // 自动轮播定时器
      prevDisabled: true, //prev按钮是否禁用
      nextDisabled: false, // next按钮是否禁用
      listNum: 0, // 数据个数
      oUlLeft: 0, // ul左坐标
      liWidth: 234,
      lock: false,
    };
  },
  created() {
    this.getTime();
    this.$api.getShangouList().then((res) => {
      if (res.statusText === "OK") {
        const list = res.data.shangou;
        this.listNum = list.length;
        this.shangouList = list;
        this.remainder = list.length % 4;
        this.totalPage = Math.ceil(list.length / 4);
      }
    });
    this.autoMove();
  },
  methods: {
    getTime() {
      const startTime = new Date().getTime();
      const endTime = startTime + 2 * 60 * 60 * 1000;
      this.sessions = new Date(endTime).getHours();
      setInterval(() => {
        this.overTimeSecond--;
        if (this.overTimeSecond < 10) {
          this.overTimeSecond = buQi(this.overTimeSecond, 2);
        }
        if (this.overTimeMinute < 10) {
          this.overTimeMinute = buQi(this.overTimeMinute, 2);
        }
        if (this.overTimeSecond === "00") {
          this.overTimeSecond = 59;
          this.overTimeMinute -= 1;
        }
        if (this.overTimeMinute === 0) {
          this.overTimeMinute = 59;
          this.overTimeHours -= 1;
        }
        if (
          this.overTimeHours === 0 &&
          this.overTimeMinute === 0 &&
          this.overTimeSecond === 0
        ) {
          this.overTimeHours = 1;
          this.overTimeMinute = 59;
          this.overTimeSecond = 59;
          this.getTime();
        }
      }, 1000);

      function buQi(val, n) {
        return (Array(n).join(0) + val).slice(-n);
      }
    },
    handleLock() {
      if(this.nowPage === 4) {
        return;
      }
      this.lock = false;
    },
    prev() {
      if (this.prevDisabled) {
        return;
      }
      this.move("left");
    },
    next() {
      if (this.nextDisabled) {
        return;
      }
      this.move("right");
    },
    move(dir = "right") {
      if (!this.lock) {
        console.log(this.nowPage, this.totalPage)
        const oUl = document.getElementById("shan-swiper-content");
        this.lock = true;
        dir === 'left' ? this.nowPage -= 1 : this.nowPage += 1;
        let moveRange = 0;
        const oUlLeft = oUl.offsetLeft;
        if (this.nowPage === this.totalPage) {
          moveRange = this.liWidth * this.remainder + this.remainder * 14;
        } else {
          if (dir === "left" && this.nowPage === this.totalPage - 1) {
            moveRange = this.liWidth * this.remainder + this.remainder * 14;
          } else {
            moveRange = 14 * 4 + this.liWidth * 4; //移动距离
          }
        }
        if(this.nowPage === this.totalPage) {
          this.nextDisabled = true;
        } else if (this.nowPage === 1){
          this.prevDisabled = true;
        } else {
          this.nextDisabled = false;
          this.prevDisabled = false;
          
        }
        this.oUlLeft = dir === "left" ? oUlLeft + moveRange : oUlLeft - moveRange;
      }
    },
    autoMove() {
      this.autoMoveTimer = setInterval(() => {
        if (this.nowPage === this.totalPage) {
          this.nowPage = 1;
          this.oUlLeft = 0;
          this.prevDisabled = true;
          this.nextDisabled = false;
        } else {
          this.move();
        }
      }, 2000);
    },
    enterShangou() {
      clearInterval(this.autoMoveTimer);
    },
    leaveShangou() {
        this.autoMove();
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/home/Shangou.less";
</style>