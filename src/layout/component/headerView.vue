<template>
  <div class="layout-header">
    <!-- 左侧菜单按钮 面包屑 用户 -->
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
          <el-breadcrumb :separator-icon="ArrowRight" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
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
                  <el-icon>
                    <User />
                  </el-icon>{{}}
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-icon>
                    <Edit />
                  </el-icon>{{}}
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <el-icon>
                    <SwitchButton />
                  </el-icon>{{}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- tabs -->
    <div class="header-wrap-bottom">
      <div class="tabs-box">
        <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
          <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            首页
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const { options } = useRouter()
const { path } = useRoute()
const routers = options.routes
console.log('routers', routers)
console.log('path', path)

const isCollapse = computed(() => store.state.app.isCollapse)
const changeCol = () => {
    store.commit('app/SET_COLLAPSE', !isCollapse.value)
    console.log(isCollapse.value)
}
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
    }
])
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

// tabs
.header-wrap-bottom {
  background: #fff;
  box-sizing: border-box;
  height: 40px;
  padding: 0 10px;
  margin: 0;
}

.tabs-box {
  position: inherit;
  width: 100%;
}

::v-deep .el-tabs__item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #afafaf;
  border: none !important;
}
::v-deep .el-tabs--card>.el-tabs__header .el-tabs__nav {
  border: none !important;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
}
::v-deep .el-tabs__header{
  border-bottom: none!important;
}
</style>
