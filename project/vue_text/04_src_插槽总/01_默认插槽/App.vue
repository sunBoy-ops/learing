<template>
  <div class="container">
    <MyCategory title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srlqe.jpg" alt="" />
    </MyCategory>
    <MyCategory title="游戏">
      <li v-for="(i, index) in games" :key="index">{{ i }}</li>
    </MyCategory>
    <MyCategory title="电影">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
