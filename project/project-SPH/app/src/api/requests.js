// 对于axios的二次封装
import axios from 'axios';
// 引入nprogress进度条插件
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 1.利用axios对象的方法create，去创建axios实例
// 2.requests就是axios，只不过稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: '/api',
  // 代表请求超时的时间
  timeout: 5000,
});

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求之前做一些事情
requests.interceptors.request.use((config) => {
  // nprogress.start() 进度条开始
  nprogress.start();
  // config:配置对象，对象里面有一个属性很重要，headers请求头
  return config;
});

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // nprogress.done() 进度条结束
    nprogress.done();
    // 重构的回调函数：服务器相应的数据回来以后，响应拦截器可以检测到，可以做一些处理
    return res.data;
  },
  (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('faile'));
  }
);

// 对外暴露
export default requests;
