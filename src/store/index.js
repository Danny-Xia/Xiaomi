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
    isLogin: false
  },
  mutations: {
    changeIsShowDrop (state, isShow) {
      state.isShowDrop = isShow;
    },
    changeIsShowDropTimer (state, isShowTimer) {
      state.isShowDropTimer = isShowTimer;
    },
    changeGwcIsLoading(state, isLoading) {
      state.gwcIsLoading = isLoading;
    },
    changeIsShowLeftMenu (state, isShow) {
      state.isShowLeftMenu = isShow;
    },
    changeCloseLeftMenuTimer (state, timer) {
      state.closeLeftMenuTimer = timer;
    },
    changeIsLogin (state, isLogin) {
      state.isLogin = isLogin;
    }
  },
  actions: {
    changeIsShowDrop ({ commit, state }, obj) {
      if(obj.className === 'gwc active') {
        setTimeout (() => {
          commit('changeGwcIsLoading', false);
        }, 1000)
      }
      
      commit('changeIsShowDropTimer', setTimeout(() => {
        if(obj.e) {
          obj.e.target.className =  obj.className;
        } else {
          document.getElementById('gwc').className = "gwc";
        }
        commit('changeIsShowDrop', obj.isShow);
      }, 200)) 
    }
  },
  modules: {
  }
})
