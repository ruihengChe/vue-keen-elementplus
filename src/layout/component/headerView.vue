<template>
  <div class="header-wrap">
    <div class="wrap">
      <span class="menu-btn">
        <el-icon class="icon" v-if="isCollapse">
          <expand />
        </el-icon>
        <el-icon class="icon" v-else>
          <fold />
        </el-icon>
      </span>
    </div>
    <div class="wrap">用户头像</div>
  </div>
</template>

<script setup>
import { toRef } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const isCollapse = toRef(store.state.isCollapse)
</script>

<style scoped></style>
