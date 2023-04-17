<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input ref="todoTitle" type="text" :value="todoObj.title" v-show="todoObj.isEdit" @blur="handleUpdate(todoObj, $event)" />
    </label>
    <button class="btn btn-danger" @click="handleDelect(todoObj.id)">删除</button>
    <button class="btn btn-edit" @click="handleShow(todoObj)">编辑</button>
  </li>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'MyItem',
  props: ['todoObj'],
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
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo', id);
    },
    // 删除按钮
    handleDelect(id) {
      if (confirm('确定删除吗?')) {
        // 事件总线写法
        this.$bus.$emit('delectTodo', id);
      }
    },
    // 编辑功能
    handleShow(todo) {
      // Object.prototype.hasOwnProperty.call(todo, todo.isEdit);
      // console.log(Object.prototype.hasOwnProperty.call(todo, todo.isEdit));
      if (!Object.prototype.hasOwnProperty.call(todo, todo.isEdit)) {
        this.$set(todo, 'isEdit', true);
      } else {
        todo.isEdit = true;
      }
      this.$nextTick(function () {
        this.$refs.todoTitle.focus();
      });
    },
    handleUpdate(todo, e) {
      todo.isEdit = false;
      this.$bus.$emit('updateTodo', todo.id, e.target.value);
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
