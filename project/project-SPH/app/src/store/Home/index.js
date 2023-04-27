import { reqCategoryList } from '@/api';

export const home = {
  state: { categoryList: [] },
  actions: {
    async categoryList({ commit }) {
      let result = await reqCategoryList();
      if (result.code == 200) {
        commit('CATEGORYLIST', result.data);
      }
    },
  },
  mutations: {
    CATEGORYLIST(state, value) {
      state.categoryList = value;
    },
  },
  getters: {},
};
