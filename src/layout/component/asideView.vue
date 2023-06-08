<template>
    <div class="logo"><img :src="logo" alt=""><span class="tiltle-top">项目管理系统</span></div>
    <el-menu :collapse="collapse"
    :default-active="currentPath"
    background-color="#344a5f"
    text-color="#fff"
    active-text-color="#409eff"
    router
    active-class="menu-active">
      <template v-for="item in routers" :key="item.path">
        <template v-if="!item.hidden">
          <!-- 一级菜单 -->
          <template v-if="hasOnlyChild(item.children)" >
            <el-menu-item :index="item.children[0].path">
              <el-icon :size="20">
                <component :is="item.children[0].meta.icon" class="menu-icon "></component>
              </el-icon>
              {{ item.children[0].meta && item.children[0].meta.title }}
            </el-menu-item>
          </template>
          <!-- 子级菜单 -->
          <template v-else>
            <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
              <template #title>
                <el-icon :size="20">
                  <component :is="item.meta.icon" class="menu-icon "></component>
                </el-icon>
                {{ item.meta && item.meta.title }}
              </template>
              <template v-for="child in item.children" :key="child.path">
                <el-menu-item v-if="!child.hidden" :index="child.path">{{ child.meta && child.meta.title }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </template>
      </template>
    </el-menu>
  </template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
// import { useStore } from 'vuex'
import { ref, computed } from 'vue'
// import { Histogram } from '@element-plus/icons-vue'

// const store = useStore()
const { options } = useRouter()
const { path } = useRoute()
const routers = options.routes
const logo = require('@/assets/logo.png')
const collapse = ref(false)
console.log(routers)
// 判断是否只有一个子菜单
const hasOnlyChild = (children) => {
  // 不存在子级路由
  if (!children) {
    return false
  }
  // 过滤掉hidden为true的子级路由，存储到childRouter
  const childRouter = children.filter(item => {
    return item.hidden ? 'false' : 'true'
  })

  // 只有一个子级路由
  if (childRouter.length === 1) {
    return true
  }
  // 否则
  return false
}

// 获取当前路由
const currentPath = computed(() => path)
</script>

<style scoped lang="scss">
.logo {
    padding: 5px 0;
    border-bottom: 1px solid #2d4123;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        widows: 22px;
        height: 22px;
        margin-left: 10px;
    }

    .tiltle-top {
        font-size: 21px;
        font-weight: 700;
        color: #fff;
        margin-left: 10px;

    }
}

.menu-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin: 0 5px 0 0;
}
.menu-active{
    background-color: #fff !important;
}
.is-active{
  background-color: #f5f5f5!important;
}
</style>
