import Vue from 'vue';
import Vuex from 'vuex';
import { home } from './Home';
import { Serach } from './Serach';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    Serach,
  },
});
