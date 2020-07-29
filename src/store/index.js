import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isShowDrop: false,
    isShowDropTimer: null,
    gwcIsLoading: true,
    isShowLeftMenu: true,
    closeLeftMenuTimer: null,
    isLogin: false,
    shopCurPrice: 799,
    totalPrice: 799, // 总价格
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
    ],
    accident: {
      title: "选择小米提供的意外保护",
      subtitle: "了解意外保护",
      name: 'accident',
      content: [
        {
          contentTitle: "意外保障服务",
          des: "手机意外碎屏/进水/碾压等损害",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592308656.71955736.png",
          price: 99,
          checked: false,
        },
        {
          contentTitle: "碎屏保障服务",
          des: "手机意外碎屏",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592308656.71955736.png",
          price: 59,
          checked: false,
        },
      ],
    }, // 意外保护模块的数据
    guarantee: {
      title: "选择小米提供的延长保修",
      subtitle: "了解延长保修",
      name: 'guarantee',
      content: [
        {
          contentTitle: "意外保修服务",
          des: "厂保延一年，性能故障免费维修",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592308656.71955736.png",
          price: 29,
          checked: false,
        },
      ],
    }, // 延长保修模块的数据
    cloud: {
      title: "选择小米提供的云空间服务",
      subtitle: "了解云空间服务",
      name: 'cloud',
      content: [
        {
          contentTitle: "云空间年卡500G",
          des: "主商品签收后，自动激活至下单账号",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572610610.24192285.jpg",
          price: 239,
          checked: false,
        },
        {
          contentTitle: "云空间年卡200G",
          des: "主商品签收后，自动激活至下单账号",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572610610.24192285.jpg",
          price: 159,
          checked: false,
        },
        {
          contentTitle: "云空间年卡50G",
          des: "主商品签收后，自动激活至下单账号",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572490766.85172472.jpg",
          price: 49,
          checked: false,
        },
        {
          contentTitle: "云空间年卡10G",
          des: "主商品签收后，自动激活至下单账号",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572490766.85172472.jpg",
          price: 29,
          checked: false,
        },
        {
          contentTitle: "云空间月卡50G",
          des: "主商品签收后，自动激活至下单账号",
          icon:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572608505.8617283.jpg",
          price: 6,
          checked: false,
        },
      ],
    }, // 云服务空间卡的数据
  },
  getters: {
    totalPrice (state) {
      let num = state.shopCurPrice;
      state.accident.content.forEach(ele => {
        if(ele.checked) {
          num += ele.price;
        }
      }) 
      state.guarantee.content.forEach(ele => {
        if(ele.checked) {
          num += ele.price;
        }
      })
      state.cloud.content.forEach(ele => {
        if(ele.checked) {
          num += ele.price;
        }
      })
      return num;
    },
    settlementList (state) {//要结算的其他服务项
      let arr = [{},{},{}];
      
      state.accident.content.forEach(ele => {
        if(ele.checked) {
          let obj = {};
          obj.title = ele.contentTitle;
          obj.price = ele.price;
          arr[0] = obj;
        }
      })
      state.guarantee.content.forEach(ele => {
        if(ele.checked) {
          let obj = {};
          obj.title = ele.contentTitle;
          obj.price = ele.price;
          arr[1] = obj;
        }
      })
      state.cloud.content.forEach(ele => {
        if(ele.checked) {
          let obj = {};
          obj.title = ele.contentTitle;
          obj.price = ele.price;
          arr[2] = obj;
        }
      })
      return arr;
    }
  },
  mutations: {
    changeAccident (state, obj) {
      state.accident = obj;
    },
    changeGuarantee (state, obj) {
      state.guarantee = obj;
    },
    changeCloud (state, obj) {
      state.cloud = obj;
    },
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