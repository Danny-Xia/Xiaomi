<template>
  <div class="login">
    <div class="login-header">
      <div class="header-content">
        <img src="@/assets/images/logo.jpg" alt="小米官网" />
      </div>
    </div>
    <div class="main">
      <div class="main-content">
        <div class="login-inp">
          <h4>
            <span
              :class="{'active': accountActive, 'login-item': true}"
              @click="handleAccountLogin"
            >账号登陆</span>
            <span class="gun"></span>
            <span :class="{'active': saoActive, 'login-item': true}" @click="handleSaoLogin">扫码登陆</span>
          </h4>
          <div class="account-login" v-show="accountActive">
            <div class="account">
              <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="account" />
            </div>
            <div class="pwd">
              <input type="password" placeholder="密码" v-model="password" />
            </div>
            <div class="login-btn-box">
              <button class="login-btn" @click="handleLogin">登陆</button>
            </div>
            <p class="short-message">
              <span>手机短信登陆/注册</span>
            </p>
            <p>
              <span>立即注册</span>|
              <span>忘记密码？</span>
            </p>
            <div class="other-login">
              <span>其他方式登陆</span>
              <p>
                <i class="iconfont iconicon"></i>
                <i class="iconfont iconweibo"></i>
                <i class="iconfont iconzhifubao"></i>
                <i class="iconfont icongongzhonghao"></i>
              </p>
            </div>
          </div>
          <div class="sao-login" v-show="saoActive">
            <img src="@/assets/images/login-erw.png" />
            <p>
              使用
              <span>小米商城APP</span>扫一扫
            </p>
            <p>小米手机可打开 [设置] > [小米账号] 扫码登陆</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li
          v-for="item in footerList"
          :key="item.id"
          :class="{'active': typefaceActive === item.title}"
        >{{ item.title }}</li>
      </ul>
      <p>
        小米公司版权所有-京ICP备10046444-
        <img
          src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
        />京公网安备11010802020134号-京ICP证110507号
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        { id: "footer-1", title: "简体" },
        { id: "footer-2", title: "繁体" },
        { id: "footer-3", title: "English" },
        { id: "footer-4", title: "常见问题" },
        { id: "footer-5", title: "隐私政策" },
      ],
      accountActive: true,
      saoActive: false,
      typefaceActive: "简体",
      account: "",
      password: "",
    };
  },
  methods: {
    handleAccountLogin() {
      this.accountActive = true;
      this.saoActive = false;
    },
    handleSaoLogin() {
      this.saoActive = true;
      this.accountActive = false;
    },
    handleLogin() {
      if (this.account.trim() === "" || this.password.trim() === "") {
        alert("干啥呢");
        return;
      } else {
        this.$api.login(this.account, this.password).then((res) => {
          if (res.data.status === "success") {
            this.account = "";
            this.password = "";
            this.$message({
              message: res.data.msg,
              type: "success",
            });
            document.cookie = "login=true";
            this.$router.push("/home");
          } else {
            this.$message.error(res.data.msg);
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/css/login/index.less";
</style>