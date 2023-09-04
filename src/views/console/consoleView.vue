<template>
    <div>
      <button>更新消息nextTick</button>
      <my-echart :option="chartOption"></my-echart>
    </div>
  </template>

<script setup>
import { onMounted } from 'vue'
import { getDashboardData } from '@/api/dash.js'
import MyEchart from '@/components/echart.vue'

onMounted(async () => {
    const res = await getDashboardData()
    console.log('res', res)
})
const chartOption = {
    title: {
        text: '图表'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36]
        }
    ]
}
</script>
