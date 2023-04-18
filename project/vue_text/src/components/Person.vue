<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h1 style="color: red">count组件的和为:{{ sum }}</h1>
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
      this.$store.commit('ADD_PERSON', personObj);
      this.name = '';
    },
    // ...mapMutations({ add: 'ADD_PERSON' }),
  },
  computed: {
    ...mapState(['personList', 'sum']),
  },
};
</script>
