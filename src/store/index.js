import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'

Vue.use(Vuex)

let timer = null

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 非生产环境开启严格模式
  state: {
    loading: false
  },
  mutations: {
    LOADING (state, boolean) {
      state.loading = boolean
    },
    MESSAGE_ERROR (state, msg) {
      Message.error(msg)
    },
    MESSAGE_SUCCESS (state, msg) {
      Message.success(msg)
    }
  },
  actions: {
    LOADING ({commit}, boolean) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        commit('LOADING', !!boolean)
      }, 250)
    }
  }
})

export default store