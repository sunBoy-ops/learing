// Count相关的配置
const countOptions = {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      if (context.sum % 2) {
        context.commit('JIA', value);
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value);
      }, 500);
    },
  },
  mutations: {
    JIA(context, value) {
      context.sum += value;
    },
    JIAN(context, value) {
      context.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: '华东交大',
    address: '江西南昌',
  },
  getters: {
    bigSum() {
      return countOptions.state.sum * 10;
    },
  },
};
export default countOptions;
