<template>
    <el-container class="layout-main">
        <!-- 左侧菜单 -->
        <el-aside width="200px" class="layout-aside">
            <el-menu class="layout-menu" :default-active="1" :default-openeds="['1', '3']">
                <el-sub-menu index="1">
                    <template #title>
                        Navigator One
                    </template>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>Navigator two</template>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>Navigator three</template>
                    <!-- <el-menu-item-group title="Group One"> -->
                    <el-menu-item index="3-1">item one</el-menu-item>
                    <el-menu-item index="3-2">item two</el-menu-item>
                    <!-- </el-menu-item-group> -->
                </el-sub-menu>
            </el-menu>
        </el-aside>
        <!-- 右侧内容区域 -->
        <!-- <el-main></el-main> -->
        <el-container>
            <el-header class="layout-header">导航路由</el-header>
            <el-main class="layout-main">
            </el-main>
        </el-container>
    </el-container>
</template>
<script></script>

<style scoped lang="scss">
.layout-main {
    height: 100%;
    width: 100%;

    .layout-aside {
        height: 100%;
        overflow-y: auto;

        .layout-menu {
            height: 100%;
        }
    }

    .layout-header {
        height: 70px;
        background-color: rgb(179, 171, 225);
    }

    .layout-main {
        background-color: rgb(57, 129, 151);
    }
}
</style>
