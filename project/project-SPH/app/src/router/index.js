import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    // 重定向
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      name: 'search',
      // keyword不传递参数时 添加？ 路径不会出现问题
      path: '/search/:keyword?',
      component: Search,
      meta: {
        show: true,
      },
      props: ($route) => {
        return {
          keyword: $route.params.keyword,
          k: $route.query.k,
        };
      },
    },
    {
      path: '/login',
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: '/register',
      component: Register,
      meta: {
        show: false,
      },
    },
  ],
});
