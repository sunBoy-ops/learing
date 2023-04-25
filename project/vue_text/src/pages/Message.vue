<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- router-link通过to属性 字符串的方式传递参数 -->
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`"> -->
        <!-- router-link通过to属性 对象的方式传递参数 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: message.id,
              title: message.title,
            },
          }"
        >
          {{ message.title }}
        </router-link> -->

        <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: message.id,
              title: message.title,
            },
          }"
        >
          {{ message.title }}
        </router-link>
        &nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// 导入其他文件例如：import 《组件名称》 from '《组件路径》'
export default {
  name: 'Message',
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      messageList: [
        {
          id: '001',
          title: 'message001',
        },
        {
          id: '002',
          title: 'message002',
        },
        {
          id: '003',
          title: 'message003',
        },
      ],
    };
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
