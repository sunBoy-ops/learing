// 引入vuex
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 准备actions--用于响应组件中的动作
const actions = {
  jiaOdd(context, value) {
    context.commit('JIAOdd', value);
  },
  jiaWait(context, value) {
    context.commit('JIAWait', value);
  },
};

// 准备mutations--用于操作数据(state)
const mutations = {
  JIA(context, value) {
    context.sum += value;
  },
  JIAN(context, value) {
    context.sum -= value;
  },
  JIAOdd(context, value) {
    if (context.sum % 2) {
      context.sum += value;
    }
  },
  JIAWait(context, value) {
    setTimeout(() => {
      context.sum += value;
    }, 500);
  },
  ADD_PERSON(context, value) {
    console.log(value);
    context.personList.unshift(value);
  },
};

// 准备state--用于存储数据
const state = {
  sum: 0,
  school: '华东交大',
  address: '江西南昌',
  personList: [{ id: '001', name: '张三' }],
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
