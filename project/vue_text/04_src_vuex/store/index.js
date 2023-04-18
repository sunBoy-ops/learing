// 引入vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 准备actions--用于响应组件中的动作
const actions = {
  // context 上下文 value 组件传递的数据
  // jia(context, value) {
  //   // console.log('actions中的jia调用了', context, value);
  //   context.commit('JIA', value);
  // },
  jiaOdd(context, value) {
    // console.log('actions中的jiaOdd调用了', context, value);
    context.commit('JIAOdd', value);
  },
  jiaWait(context, value) {
    // console.log('actions中的jiaWait调用了', context, value);
    context.commit('JIAWait', value);
  },
};

// 准备mutations--用于操作数据(state)
const mutations = {
  JIA(context, value) {
    console.log('mutation中的JIA调用了', context, value);
    context.sum += value;
  },
  JIAN(context, value) {
    console.log('mutation中的JIAN调用了', context, value);
    context.sum -= value;
  },
  JIAOdd(context, value) {
    console.log('mutation中的JIANOdd调用了', context, value);
    if (context.sum % 2) {
      context.sum += value;
    }
  },
  JIAWait(context, value) {
    console.log('mutation中的JIANWait调用了', context, value);
    setTimeout(() => {
      context.sum += value;
    }, 500);
  },
};

// 准备state--用于存储数据
const state = {
  sum: 0,
  school:"华东交大",
  address:'江西南昌'
};

// 准备getters--用于对存储的数据进行加工
const getters = {
  bigSum() {
    return state.sum * 10;
  },
};

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
