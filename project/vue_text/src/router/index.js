import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          name: 'message',
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,

              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:900}

              //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
              // props:true

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props({ query: { id, title } }) {
                return {
                  id,
                  title,
                };
              },
              props({ params: { id, title } }) {
                return {
                  id,
                  title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});
//为router实例对象，声明全局前置导航守卫
//只要发生了路由的跳转，必然会触发beforeEach指定的function回调函数
router.beforeEach((to, from, next) => {
  //to是将要访问的路由的信息对象
  //from是将要离开的路由的信息对象
  //next是一个函数，调用next()表示放行，允许这次路由导航
  next(); //next函数表示放行的意思
});
export default router;
