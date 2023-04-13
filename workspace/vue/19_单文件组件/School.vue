<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showName">点击</button>
  </div>
</template>

<script>
// 组件的行为
export default {
  name:'School',
  data() {
    return {
      name: '江西机电',
      address: '江西南昌',
    };
  },
  methods: {
    showName() {
      console.log(this.name);
    },
  },
};
</script>

<style lang="">
.demo {
  background-color: orange;
}
</style>
