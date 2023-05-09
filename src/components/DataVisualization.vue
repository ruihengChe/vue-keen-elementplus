<template>
    <div class="chart-container">
        <div ref="chart" class="chart"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    mounted() {
        this.chart = echarts.init(this.$refs.chart);
        this.chart.setOption({
            title: {
                text: '数据可视化大屏'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        });
    },
    beforeUnmount() {
        this.chart.dispose();
    }
};
</script>

<style>
.chart-container {
    width: 100%;
    height: 100%;
}

.chart {
    width: 100%;
    height: 100%;
}
</style>