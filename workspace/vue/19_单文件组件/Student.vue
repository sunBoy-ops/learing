<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
// 组件的行为
export default {
  name: 'Student',
  data() {
    return {
      name: '胡图图',
      age: 18,
    };
  },
};
</script>
