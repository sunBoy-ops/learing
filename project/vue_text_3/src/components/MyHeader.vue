<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="addTitle" @keydown.enter="add" />
  </div>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
import { nanoid } from 'nanoid';
export default {
  name: 'MyHeader',
  props: ['addTodo'],
  data() {
    // 这里存放数据
    return {
      addTitle: '',
    };
  },
  methods: {
    add() {
      if (this.addTitle) {
        const todoObj = { id: nanoid(), title: this.addTitle, done: false };
        this.addTodo(todoObj);
      }
      this.addTitle = '';
    },
  },
};
</script>

<style scoped lang="css">
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
