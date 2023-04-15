<template>
  <ul class="todo-main">
    <MyItem v-for="todo in todos" :key="todo.id" :todoObj="todo" :checkTodo="checkTodo" :delectTodo="delectTodo"></MyItem>
  </ul>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
import MyItem from './MyItem';
export default {
  name: 'MyLists',
  // import引入的组件需要注入到对象中才能使用
  components: {
    MyItem,
  },
  props: ['todos', 'checkTodo','delectTodo'],
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

<style scoped lang="css">
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
