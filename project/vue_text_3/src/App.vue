<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo"></MyHeader>
      <MyLists :todos="todos" :checkTodo="checkTodo" :delectTodo="delectTodo"></MyLists>
      <MyFooter :todos="todos" :checkTodos="checkTodos" :delectTodos="delectTodos"></MyFooter>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyLists from './components/MyLists';
import MyFooter from './components/MyFooter';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyLists,
    MyFooter,
  },
  data() {
    return {
      // 待办列表数据
      // todos: [
      //   { id: '001', title: '吃饭', done: true },
      //   { id: '002', title: '睡觉', done: false },
      //   { id: '003', title: '打游戏', done: false },
      // ],
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  },
  methods: {
    // MyHeader 传递过来的数据
    addTodo(x) {
      this.todos.unshift(x);
    },
    // 勾选复选框 修改done值
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除待办
    delectTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选框修改所有待办事项
    checkTodos(bol) {
      console.log(bol);
      this.todos.forEach((todo) => {
        todo.done = bol;
      });
    },
    // 删除所有待办
    delectTodos() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang="css">
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
