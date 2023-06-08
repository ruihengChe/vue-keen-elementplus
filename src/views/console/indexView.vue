<template>
    <div>
        <h3>控制台</h3>
        <el-button type="primary">按钮</el-button>
        <el-icon :size="size" :color="color">
            <Edit />
        </el-icon>
        <h3>{{ username }}</h3>
        <h4>{{ store.state.user.username }}</h4>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const username = computed(() => store.state.user.username)
const size = '20'
const color = 'red'
</script>

<style scoped></style>
