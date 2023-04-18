<template>
  <div class="container">
    <MyCategory title="美食">
      <template v-slot:foots>
        <img src="https://s3.ax1x.com/2021/01/16/srlqe.jpg" alt="" />
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template v-slot:games>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </template>
    </MyCategory>
    <MyCategory title="电影">
      <template v-slot:films>
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </template>
    </MyCategory>
  </div>
  <!-- 视频:http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
    图片∶https: //s3.ax1x.com/ 2021/01/16/srlqe.jpg -->
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
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
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
