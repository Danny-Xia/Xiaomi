<template>
  <div class="register">
    <div class="main">
      <img src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png" alt />
      <h1>注册小米账号</h1>
      <div class="inp">
        <label for="reg-account">账号：</label>
        <input type="text" name="reg-account" id="reg-account" placeholder="请输入要注册的账号" />
      </div>
      <div class="inp">
          <label for="reg-pwd">密码：</label>
          <input type="text" name="reg-pwd" id="reg-pwd" placeholder="请输入密码" />
      </div>
      <div class="btn-box">
        <button>立即注册</button>
      </div>
      <p>已阅读并同意：小米 <span>用户协议</span> 和 <span> 隐私政策</span> </p>
    </div>
    <div class="footer">
      <ul>
        <li v-for="item in footerList" 
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
      typefaceActive: '简体'
    };
  },
};
</script>

<style lang="less" scoped>
@import '@/assets/css/register/index.less';
</style>