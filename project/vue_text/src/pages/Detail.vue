<template>
  <div class="Detail">
    <!-- <p>消息编号：{{ $route.query.id }}</p>
    <p>消息标题：{{ $route.query.title }}</p> -->
    <p>消息编号：{{ id }}</p>
    <p>消息标题：{{ title }}</p>
  </div>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'Detail',
  props: ['id', 'title'],
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$route);
  },
  methods: {},
};
</script>
