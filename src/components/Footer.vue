<template>
  <div class="m-footer">
    <ul class="list-service">
      <li v-for="item in listService" :key="item.id">
        <span>
          <i :class="item.class"></i>
          {{ item.title }}
        </span>
      </li>
    </ul>
    <div class="footer-links">
      <dl v-for="item in links" :key="item.title">
        <dt>{{ item.title }}</dt>
        <dd v-for="dds in item.items" :key="dds">
            <span>{{ dds }}</span>
        </dd>
      </dl>
      <div class="contact-info">
        <p class="phone">400-100-5678</p>
        <p class="time">8:00-18:00（仅收市话费）</p>
        <div>
          <i class="iconfont iconxinxi"></i>
          人工客服
        </div>
        <p class="follow">
          关注小米：
          <i class="iconfont iconweibo"></i>
          <i class="iconfont icongongzhonghao"></i>
        </p>
      </div>
    </div>
    <div class="sites">
      <ul class="clear-fix">
        <li v-for="item in sites" :key="item">
            <span>{{ item }}</span>
            <span>|</span>
        </li>
      </ul>
    </div>
    <div class="sites-info">
      <p>
        ©
        <span>mi.com</span> 京ICP证110507号
        <span>京ICP备10046444号</span>
        <span>京公网安备11010802020134号</span>
        <span>京网文[2020]0276-042号</span>
      </p>
      <p>
        <span>（京）网械平台备字（2018）第00005号</span>
        <span>互联网药品信息服务资格证 (京)-非经营性-2014-0090</span>
        <span>营业执照</span>
        <span>医疗器械质量公告</span>
      </p>
      <p>
        <span>增值电信业务许可证</span> 网络食品经营备案（京）【2018】WLSPJYBAHF-12
        <span>食品经营许可证</span>
      </p>
      <p>
        违法和不良信息举报电话：185-0130-1238
        <span>知识产权侵权投诉</span> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
      </p>
      <p class="sites-info-logo">
        <img :src="item" v-for="item in imgLogos" :key="item" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listService: [
        {
          class: "iconfont iconbuoumaotubiao46",
          title: "预约维修服务",
          id: 0
        },
        {
          class: "iconfont icon7tianwuliyoutuihuo",
          title: "7天无理由退货",
          id: 1
        },
        {
          class: "iconfont icon15tianwuliyoutuihuo",
          title: "15天无理由退货",
          id: 2
        },
        {
          class: "el-icon-present",
          title: "满99包邮",
          id: 3
        },
        {
          class: "el-icon-location-outline",
          title: "520余家售后网点",
          id: 4
        }
      ],
      links: [
        { title: "帮助中心", items: ["账户管理", "购物指南", "订单操作"] },
        { title: "服务支持", items: ["售后政策", "自主服务", "相关下载"] },
        { title: "线下门店", items: ["小米之家", "服务网点", "授权体验"] },
        {
          title: "关于小米",
          items: [
            "了解小米",
            "加入小米",
            "投资者关系",
            "企业社会责任",
            "廉洁举报"
          ]
        },
        {
          title: "关注我们",
          items: ["新浪微博", "官方微信", "联系我们", "公益基金会"]
        },
        { title: "特色服务", items: ["F码通道", "礼物码", "防伪查询"] }
      ],
      sites: [
        "小米商城",
        "MIUI",
        "米家",
        "米聊",
        "多看",
        "游戏",
        "政企服务",
        "小米天猫店",
        "小米集团隐私政策",
        "小米公司儿童信息保护规则",
        "小米隐私政策",
        "小米商城用户协议",
        "问题反馈",
        "Select Location"
      ],
      imgLogos: [
        "//i1.mifile.cn/f/i/17/site/truste.png",
        "//s01.mifile.cn/i/v-logo-2.png",
        "//s01.mifile.cn/i/v-logo-1.png",
        "//i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/css/footer/index.less";
</style>

