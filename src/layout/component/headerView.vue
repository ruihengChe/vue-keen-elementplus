<template>
  <div class="header-wrap">
    <div class="wrap">
      <span class="menu-btn" @click="changeCol">
        <el-icon class="icon" v-if="isCollapse">
          <expand />
        </el-icon>
        <el-icon class="icon" v-else>
          <fold />
        </el-icon>
      </span>
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
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
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
</style>
