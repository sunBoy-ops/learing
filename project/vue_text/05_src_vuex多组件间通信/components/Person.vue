<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的</button>
    <button @click="addServer">从服务器添加姓名</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h1 style="color: red">count组件的和为:{{ sum }}</h1>
    <h1 style="color: red">personList中第一个名字:{{ firstPersonList }}</h1>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { nanoid } from 'nanoid';
export default {
  name: 'Person',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit('personAbout/ADD_PERSON', personObj);
      this.name = '';
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch('personAbout/addPersonWang', personObj);
      this.name = '';
    },
    addServer() {
      const personObj = { id: nanoid(), name: '' };
      this.$store.dispatch('personAbout/addPersonServer');
    },
    // ...mapMutations({ add: 'ADD_PERSON' }),
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonList() {
      return this.$store.getters['personAbout/firstPeronList'];
    },
    // ...mapState('personAbout', ['personList']),
    // ...mapState('countAbout', ['sum']),
  },
  mounted() {},
};
</script>
