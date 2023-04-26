<template>
  <div>
    <h1>params---{{ this.$route.params.keyword }}</h1>
    <h1>query---{{ this.$route.query.k }}</h1>
    <h1>props.params---{{ keyword }}</h1>
    <h1>props.query---{{ k }}</h1>
  </div>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'Search',
  props:['keyword','k'],
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {

    };
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less"></style>
