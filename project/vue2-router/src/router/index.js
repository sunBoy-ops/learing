import Vue from 'vue'
// 0.引入vue-router
import VueRouter from "vue-router";
//注册内置的全局组件
Vue.use(VueRouter);

// 1.导入路由组件
import My from "@/views/My.vue";
import Find from "@/views/Find.vue";
import Friend from "@/views/Friend.vue";

// 2.定义路由规则
const routes = [
  { path: "/my", component: My },
  { path: "/find", component: Find },
  { path: "/Friend", component: Friend },
];
// 3.创建路由实例
const router = new VueRouter({
  routes,
});
export default router;