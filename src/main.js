import Vue from 'vue'
import App from './App.vue'

// main.js 入口文件 导入项目所以依赖的组件

// 导入项目依赖的bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// 导入项目的样式
import './assets/index.css';

// 导入路由
import router from './routes/router'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
