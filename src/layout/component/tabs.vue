<template>
  <!-- tabs -->
  <div class="header-wrap-bottom">
    <div class="tabs-box">
      <el-tag
      v-for="item in tags" :key="item.path" :label="item.title" :name="item.path" :closable="item.path !== '/dashboard'" class="mx-1"
    :disable-transitions="false"
    @click="tabClick(item)"
    @close="removeTab(item)"
    :effect="router.currentRoute.value.path === item.path ? 'dark' : 'light'"
  >
    {{ item?.meta?.title }}
  </el-tag>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getFlatMenuList } from '@/utils'

const store = useStore()
const route = useRoute()
const router = useRouter()

const tags = computed(() => store.state.tab.tabsList)
const editableTabsValue = ref(route.fullPath)
const removeTab = (tab) => {
    console.log('tab', tab)
    store.commit('tab/closeTab', tab)
}

// const editableTabs = computed(() => store.state.tabs.tabsMenuList)

onMounted(() => {
    initTabs()
    console.log('route', route)
})
// 监听路由变化
watch(
    () => {
        return route.fullPath
    },
    () => {
        editableTabsValue.value = route.fullPath
        const tabsParams = {
            icon: route.meta.icon,
            title: route.meta.title,
            path: route.fullPath,
            name: route.name,
            close: true
        }
        if (Object.keys(route.meta).length > 0) {
            store.dispatch('tabs/addTabsMenu', tabsParams)
        }
    },
    { immediate: true }
)
// tab点击事件
const tabClick = (item) => {
    router.push(item.path)
    store.commit('tab/selectMenu', item)
    // const fullPath = tab.props.name
    // router.push(fullPath)
}

const initTabs = () => {
    // const tabsMenuList = store.state.tabs.tabsMenuList
    // const fullPath = route.fullPath
    console.log('routerinit', router.options.routes)
    // 过滤hidden为true的路由、筛选出固定路由
    // const fixedList = getFlatMenuList(router.options.routes)
    const fixedList = getFlatMenuList(router.options.routes).filter((item) => !item.hidden && item.meta?.isfixed)
    if (fixedList.length > 0) {
        const title = fixedList[0].meta.title
        const path = fixedList[0].path
        const icon = fixedList[0].meta.icon
        const name = fixedList[0].name
        const close = true
        store.dispatch('tabs/addTabsMenu', { title, path, icon, name, close })
    }
}

</script>

<style lang="scss" scoped>
// tabs
.header-wrap-bottom {
  background: #fff;
  box-sizing: border-box;
  height: 40px;
  padding: 0 10px;
  margin: 0;
  display: flex;
    align-items: center
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

::v-deep .el-tabs__header {
  border-bottom: none !important;
}

::v-deep .el-tabs__nav .is-active {
  color: #409eff;
}
::v-deep .el-tag {
  margin-right: 10px;
  cursor: pointer;
}
</style>
