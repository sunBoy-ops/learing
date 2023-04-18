<template>
  <div class="container">
    <MyCategory title="游戏">
      <template slot-scope="data">
        <ol v-for="(item, index) in data.games" :key="index">
          {{
            item
          }}
        </ol>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template slot-scope="data">
        <li v-for="(item, index) in data.games" :key="index">{{ item }}</li>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template slot-scope="data">
        <h4 v-for="(item, index) in data.games" :key="index">{{ item }}</h4>
      </template>
    </MyCategory>
    <MyCategory title="电影">
      <template v-slot:films>
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </template>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory';
export default {
  name: 'App',
  components: {
    MyCategory,
  },
  data() {
    return {
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
    };
  },
};
</script>
<style>
ul {
  /* margin: 0; */
  padding: 0;
}
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
