import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// 导入路由
import router from "@/router";
new Vue({
  // 4.挂载路由
  router,
  render: (h) => h(App),
}).$mount("#app");
