<template>
  <ul>
    <li :style="{ opacity: opacity }">欢迎学习vue</li>
    <li>news001 <input type="text" name="" id="" /></li>
    <li>news002<input type="text" name="" id="" /></li>
    <li>news003<input type="text" name="" id="" /></li>
  </ul>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'News',

  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      opacity: 1,
    };
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},

  // 路由组件被激活时触发
  activated() {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  // 路由组件失活时触发
  deactivated() {
    console.log('News组件失活了');
    clearInterval(this.timer);
  },
};
</script>
