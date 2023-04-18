<template>
  <div>
    <h3>{{ title }}分类</h3>
    <ul>
      <slot name="foots"></slot>
      <slot name="games"></slot>
      <slot name="films"></slot>
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
