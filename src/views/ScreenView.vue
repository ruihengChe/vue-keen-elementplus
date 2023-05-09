<template>
    <div class="operation-screen">
        <!-- 时间类型容器 -->
        <div class="time-tab-box"></div>
        <!-- 顶部导航-->
        <div class="home-title-box">{{ options.titleText }}}</div>
        <!-- 内容 -->
        <div class="grid-layout" :col-num="9">
            <div class="grid-item" v-for="(item, index) in options.layout" :class="item.name" :key="index"
                style="background: green;">
                {{ item.title }}}
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
let options = reactive({
    titleText: "公交大数据运营数据分析",
    layout: [
        {
            title: "线网",
            name: "line-net"
        },
        {
            title: "车辆",
            name: "bus"
        },
        {
            title: "违规原因分析",
            name: "getout-reasons"
        },
        {
            title: "卡类型使用情况",
            name: "card-type-use"
        },
        {
            title: "区域客流统计",
            name: "area-passenger-stat"
        },//地图
        {
            title: "线路运客数排名",
            name: "transport-passenger-rank"
        },
        {
            title: "电子支付趋势",
            name: "e-pay-trend"
        },
    ]
})
</script>
<style lang="scss" scoped>
    @import "./index.scss";
    .home-title-box {
        height: 80px;
        color: white
    }
</style>