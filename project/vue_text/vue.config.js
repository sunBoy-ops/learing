const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 开启代理服务器
  devServer: {
    proxy: {
      hututu: {
        target: 'http://localhost:5000',
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host值
        pathRewrite: { '^/hututu': '' },
      },
      huyingjun: {
        target: 'http://localhost:5001',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/huyingjun': '' },
      },
    },
  },
});
