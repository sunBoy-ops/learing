<template>
  <div>
    <h1>当前x的值：{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">为奇数时可以增加</button>
    <button @click="incrementWait">延迟一会增加</button>
  </div>
</template>
<script>
export default {
  name: 'Count',
  props: ['title'],
  data() {
    return {
      sum: 0,
      n: 1,
    };
  },
  methods: {
    // sum加n
    increment() {
      this.sum += this.n;
    },
    //
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style scoped></style>
