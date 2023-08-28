<template>
  <div class="App">

    <div class="top">
      <router-link to="/my">my</router-link>
      <router-link to="/find">find</router-link>
      <router-link to="/friend">friend</router-link>
    </div>
    <div class="contains">
      <router-view></router-view>
      <h1>首页</h1>
    </div>
  </div>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: "App",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>

