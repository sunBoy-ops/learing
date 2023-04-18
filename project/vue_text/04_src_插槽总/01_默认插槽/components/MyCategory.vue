<template>
  <div>
    <h3>{{ title }}分类</h3>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Category',
  props: ['title'],
};
</script>

<style scoped>
div {
  width: 200px;
  background-color: skyblue;
}
h3 {
  background-color: burlywood;
  text-align: center;
}
</style>
