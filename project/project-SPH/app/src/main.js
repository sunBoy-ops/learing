import Vue from 'vue';
import App from './App.vue';
import router from './router';
import TypeNav from '@/components/TypeNav';
import { reqCategoryList } from '@/api';
// 路由器 管理路由的
import store from '@/store';

Vue.config.productionTip = false;
reqCategoryList();
// 把商品分类导航注册为全局组件
Vue.component(TypeNav.name, TypeNav);
new Vue({
  render: (h) => h(App),
  router,
  //路由器
  store,
}).$mount('#app');
