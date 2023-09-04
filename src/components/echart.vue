<template>
  <div ref="chartRef" :style="{width: '600px', height: '400px'}"></div>
</template>

<script setup>
// 封装一个echart组件
import * as echart from 'echarts'
import { onMounted, onUnmounted, ref, defineProps, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const chartRef = ref(null)

let chartInstance = null
const props = defineProps({
    option: {
        type: Object,
        default: () => {}
    }
})
const isCollapse = () => {
    return store.state.app.isCollapse
}
// 设置自适应
const resizeChart = () => {
    if (chartInstance) {
        chartInstance.resize()
    }
}
// 折叠菜单自适应
watch(isCollapse, () => {
    setTimeout(() => {
        resizeChart()
    }, 300)
})

onMounted(() => {
    chartInstance = echart.init(chartRef.value)
    chartInstance.setOption(props.option)

    window.addEventListener('resize', resizeChart)
})
onUnmounted(() => {
    if (chartInstance) {
        chartInstance.dispose()
        window.removeEventListener('resize', resizeChart)
    }
})
</script>

<style scoped>

</style>
