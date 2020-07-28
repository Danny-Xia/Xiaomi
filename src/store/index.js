import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowDrop: false,
    isShowDropTimer: null,
    gwcIsLoading: true,
    isShowLeftMenu: true,
    closeLeftMenuTimer: null,
    isLogin: false,
    shopCurPrice: '799元',
    totalPrice: '799元', // 总价格
    phoneModel: 'Redmi 9', // 手机型号
    phoneROM: '4GB+64GB', // 手机内存信息
    phoneColor: '莲藕粉', // 手机颜色
    cloudCard: '', // 云服务空间卡
    cloudCardPrice: '', // 云服务空间卡价格
    shopSwiperList: [{
        id: "pink-1",
        imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03891296.jpg"
      },
      {
        id: "pink-2",
        imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03417574.jpg"
      },
      {
        id: "pink-3",
        imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.0391459.jpg"
      },
      {
        id: "pink-4",
        imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.02758535.jpg"
      },
      {
        id: "pink-5",
        imgSrc: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03663677.jpg"
      },
    ]
  },
  mutations: {
    changeIsShowDrop(state, isShow) {
      state.isShowDrop = isShow;
    },
    changeIsShowDropTimer(state, isShowTimer) {
      state.isShowDropTimer = isShowTimer;
    },
    changeGwcIsLoading(state, isLoading) {
      state.gwcIsLoading = isLoading;
    },
    changeIsShowLeftMenu(state, isShow) {
      state.isShowLeftMenu = isShow;
    },
    changeCloseLeftMenuTimer(state, timer) {
      state.closeLeftMenuTimer = timer;
    },
    changeIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    changeShopCurPrice(state, price) {
      state.shopCurPrice = price;
    },
    changePhoneROM(state, rom) {
      state.phoneROM = rom;
    },
    changePhoneColor(state, color) {
      state.phoneColor = color;
    },
    changeCloudCard(state, card) {
      state.cloudCard = card;
    },
    changeCloudCardPrice(state, price) {
      state.cloudCardPrice = price;
    },
    changeShopSwiperList(state, list) {
      state.shopSwiperList = list;
    }
  },
  actions: {
    changeIsShowDrop({
      commit,
      state
    }, obj) {
      if (obj.className === 'gwc active') {
        setTimeout(() => {
          commit('changeGwcIsLoading', false);
        }, 1000)
      }

      commit('changeIsShowDropTimer', setTimeout(() => {
        if (obj.e) {
          obj.e.target.className = obj.className;
        } else {
          document.getElementById('gwc').className = "gwc";
        }
        commit('changeIsShowDrop', obj.isShow);
      }, 200))
    }
  },
  modules: {}
})