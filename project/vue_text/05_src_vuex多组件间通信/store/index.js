// 引入vuex
import Vue from 'vue';
import Vuex from 'vuex';
import countOptions from './count.js';
import personOptions from './person.js';
Vue.use(Vuex);

// // 准备actions--用于响应组件中的动作
// const actions = {};

// // 准备mutations--用于操作数据(state)
// const mutations = {};

// // 准备state--用于存储数据
// const state = {};

// // 准备getters--用于对存储的数据进行加工
// const getters = {};

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
