<template>
  <div class="layout-header" >
    <div class="header-wrap">
      <div class="left-wrap">
        <span class="menu-btn" @click="changeCol">
          <el-icon class="icon" v-if="isCollapse">
            <expand />
          </el-icon>
          <el-icon class="icon" v-else>
            <fold />
          </el-icon>
        </span>
        <div class="breadcrumb-wrap">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/dashboard' }">控制台</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: myCurrentMenu?.path }" v-if="myCurrentMenu && myCurrentMenu?.path !== '/dashboard'">
              {{ myCurrentMenu?.meta?.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="wrap">
        <div class="user-info">
          <span class="name">admin</span>
          <el-dropdown trigger="click">
            <div class="avatar">
              <img src="@/assets/images/avatar.gif" alt="avatar" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  个人中心
                </el-dropdown-item>
                <el-dropdown-item>
                  退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <tabs />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// import tabs from './tabs.vue'

const store = useStore()
const router = useRouter()
const { path } = useRoute()

console.log('path', path)
console.log('当前路由', router.currentRoute.value.matched)

// const routers = computed(() => {
//     // 过滤掉没有meta的
//     return router.currentRoute.value.matched.filter(item => item.meta && item.meta.title)
// })
const myCurrentMenu = computed(() => store.state.tab.currentMenu)
console.log('myCurrentMenu', myCurrentMenu.value)
const ArrowRight = ref('ArrowRight')
const isCollapse = computed(() => store.state.app.isCollapse)
const changeCol = () => {
    store.commit('app/SET_COLLAPSE', !isCollapse.value)
    console.log(isCollapse.value)
}

</script>

<style lang="scss" scoped>
.header-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-btn {
  cursor: pointer;
}

.icon {
  font-size: 24px;
}

.user-info {
  display: flex;
  align-items: center;

  .name {
    margin-right: 15px;
    font-size: 20px;
  }
}

.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }
}

.left-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: no-wrap;
}

</style>
