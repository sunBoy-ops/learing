<template>
  <div class="App">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './School.vue';
import Student from './Student.vue';
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'App',
  components: {
    School,
    Student,
  },
};
</script>
