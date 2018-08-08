<template>
  <!-- 由于 header sidebar 是公共样式 所以提取出来当做公共的组件 -->
  <div id="app">
    <!-- header -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <!-- sidebar -->
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 根据路由显示不同的页面 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入头部组件
import AppHeader from './components/AppHeader.vue';
// 导入侧边栏组件
import AppSidebar from './components/AppSidebar.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>


