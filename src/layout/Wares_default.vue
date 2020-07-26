<template>
  <div class="wares-default">
    <el-container>
      <el-header height="40px">
        <div class="el-header-content">
          <m-header class="view" />
          <transition>
            <div
              class="drop"
              v-show="$store.state.isShowDrop"
              @mouseenter="enterDrop($event)"
              @mouseleave="leaveDrop($event)"
            >
              <div v-if="$store.state.gwcIsLoading">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span v-else>购物车中还没有商品，赶紧选购吧！</span>
            </div>
          </transition>
        </div>
      </el-header>
      <el-main>
        <router-view class="view" />
      </el-main>
      <el-footer>
        <m-footer class="view" />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MHeader from "@/components/Header";
import MFooter from "@/components/Footer";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      
    }
  },
  components: {
    MHeader,
    MFooter
  },
  methods: {
    ...mapMutations(["changeIsShowDropTimer"]),
    enterDrop(e) {
      clearTimeout(this.$store.state.isShowDropTimer);
    },
    leaveDrop(e) {
      this.$store.dispatch("changeIsShowDrop", { isShow: false });
      setTimeout(() => {
        this.$store.commit('changeGwcIsLoading', true);
      }, 500)
    }
  }
};
</script>

<style lang="less">
.el-container {
  padding: 0;
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #333;
    color: #b0b0b0;
    font-size: 12px;
    width: 100%;
    height: 40px;
    position: relative;
    z-index: 100;
    padding: 0;
    .el-header-content {
      height: 40px;
      width: 1226px;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      .drop {
        position: absolute;
        color: #424242;
        font-size: 12px;
        width: 316px;
        height: 80px;
        background-color: #fff;
        box-shadow: -2px 2px 5px #ccc;
        right: 0;
        top: 40px;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          display: flex;
          align-items: center;
          height: 15px;
          span {
            display: inline-block;
            width: 5px;
            height: 15px;
            margin: 2px;
            background-color:orange;
            
            &:nth-of-type(1) {
              animation: run 0.3s linear alternate infinite;
            }
            &:nth-of-type(2) {
              animation: run 0.3s linear 0.2s alternate infinite;
            }
            &:nth-of-type(3) {
              animation: run 0.3s linear 0.5s alternate infinite;
            }
          }
          @keyframes run {
            0% {
              height: 15px;
              opacity: 0.3;
            }
            50% {
              height: 8px;
              opacity: 1;
            }
            100% {
              height: 15px;
              opacity: 0.7;
            }
          }
          
        }
      }

      .v-enter,
      .v-leave-to {
        transform: translateY(-100%);
      }

      .v-enter-active,
      .v-leave-active {
        transition: all 0.2s linear;
      }

      .v-leave,
      .v-enter-to {
        transform: translateY(0px);
      }
    }
  }

  .el-main {
    overflow: hidden;
    min-height: 100px;
    padding: 0;
  }
  .el-footer {
    padding: 0;
    background: #fff;
    height: 523px !important;
    width: 100%;
    // margin-top: 100px;
  }
}
</style>

