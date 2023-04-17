<template>
  <ul class="todo-main">
    <!-- appear 初始化就使用属性 -->
    <transition-group name="todo" appear>
      <MyItem v-for="todo in todos" :key="todo.id" :todoObj="todo"></MyItem>
    </transition-group>
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
  props: ['todos'],
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

/* item组件中添加增加、删除的动画 */
.todo-enter-active {
  animation: todo 0.5s linear;
}
.todo-leave-active {
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
