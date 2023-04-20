import axios from 'axios';
import { nanoid } from 'nanoid';
// person相关的配置
const personOptions = {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      console.log('actions中的addPersonWang被调用了', value.name.indexOf('王'));
      if (!value.name.indexOf('王')) {
        context.commit('ADD_PERSON_WANG', value);
      } else {
        alert('请输入一个姓王的名字');
      }
    },
    addPersonServer(context) {
      console.log('actions中的addPersonServer被调用了');
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        (response) => {
          console.log(response);
          context.commit('ADD_PERSON', { id: nanoid(), name: response.data });
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(context, value) {
      context.personList.unshift(value);
    },
    ADD_PERSON_WANG(context, value) {
      context.personList.unshift(value);
    },
  },
  state: {
    personList: [{ id: '001', name: '张三' }],
  },
  getters: {
    firstPeronList() {
      return personOptions.state.personList[0].name;
    },
  },
};

export default personOptions;
