<template>
  <el-container id="layout-container">
    <el-aside id="layout-aside" :width="isCollapse === true ? '60px' : '250px'">
      <aside-view></aside-view>
    </el-aside>
    <el-container>
      <el-header id="layout-header" height="75px">
        <header-view></header-view>
      </el-header>
      <el-main id="layout-main">
        <main-view></main-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AsideView from './component/asideView.vue'
import HeaderView from './component/headerView.vue'
import MainView from './component/mainView.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isCollapse = computed(() => store.state.app.isCollapse)
</script>

<style lang="scss" scoped>
#layout-container {
  height: 100vh;
}
#layout-aside {
  background-color: #344a5f;
  overflow-x: hidden;
  // @include webkit(transition, all .3s ease 0s);
  transition: all .3s ease 0s;
  // transition: width .3s ease;
}
#layout-header {
  position: relative;
  z-index: 10;
  /* background-color: $color_main; */
  // @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, .1));
}
#layout-main {
  background-color: #f7f7f7;
 }
</style>
