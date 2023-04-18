<template>
  <div>
    <h3>{{ title }}分类</h3>
    <ul>
      <slot :games="games"></slot>
      <slot name="films"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    };
  },
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
