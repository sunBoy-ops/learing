<template>
  <div>
    <h1>当前和的值：{{ sum }}</h1>
    <h1>当前和放大10倍的值：{{ bigSum }}</h1>
    <h1>我在 {{ school }}，地址是{{ address }}</h1>
    <h1 style="color: red">person组件的记录长度为:{{ personList.length }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">为奇数时可以增加</button>
    <button @click="incrementWait(n)">延迟一会增加</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  name: 'Count',
  props: ['title'],
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // sum加n
    // increment() {
    //   this.$store.commit('JIA', this.n);
    // },
    // //
    // decrement() {
    //   this.$store.commit('JIAN', this.n);
    // },
    // incrementOdd() {
    //   this.$store.dispatch('jiaOdd', this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch('jiaWait', this.n);
    // },
    // 借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法)
    ...mapActions('countAbout', { incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
    // ...mapActions(['jiaOdd', 'jiaWait']),
    ...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),
  },
  computed: {
    // ...mapState({sum:'sum',school:'school',address:'address'})
    // ...mapState(['sum', 'school', 'address', 'personList']),
    ...mapState('countAbout', ['sum', 'school', 'address']),
    ...mapState('personAbout', ['personList']),
    ...mapGetters('countAbout', ['bigSum']),
  },
  mounted() {
    console.log(this);
  },
};
</script>
