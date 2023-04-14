<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="handleDone" @change="changeDone" /> -->
      <input type="checkbox" v-model="handleDone" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="delectAll">清除已完成任务</button>
  </div>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'MyFooter',
  props: ['todos', 'checkTodos', 'delectTodos'],
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      dones: 0,
    };
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    // changeDone(e) {
    //   this.checkTodos(e.target.checked);
    // },
  },
  computed: {
    // 计算勾选的待办事项的数量
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + current.done;
      }, 0);
    },
    // 待办事项的数量
    total() {
      return this.todos.length;
    },
    // 全部待办事项完成 全选框就勾选
    // handleDone() {
    //   return this.doneTotal === this.total && this.total > 0;
    // },
    handleDone: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        console.log(value);
        this.checkTodos(value);
      },
    },
    // 删除所有待办
    delectAll() {
      this.delectTodos();
    },
  },
};
</script>

<style scoped lang="css">
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
