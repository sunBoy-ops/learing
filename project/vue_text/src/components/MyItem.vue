<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelect(todoObj.id)">删除</button>
  </li>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'MyItem',
  props: ['todoObj', 'checkTodo', 'delectTodo'],
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
  methods: {
    // 复选框的选中和取消
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.checkTodo(id);
    },
    // 删除按钮
    handleDelect(id) {
      if (confirm('确定删除吗?')) {
        this.delectTodo(id);
      }
    },
  },
};
</script>

<style scoped lang="css">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>
