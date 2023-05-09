<template>
    <div class="smart-city-center">
        <div class="map-container">
            <v-chart :options="mapOptions"></v-chart>
        </div>
        <div class="chart-container">
            <div class="pie-chart">
                <v-chart :options="pieOptions"></v-chart>
            </div>
            <div class="bar-chart">
                <v-chart :options="barOptions"></v-chart>
            </div>
            <div class="line-chart">
                <v-chart :options="lineOptions"></v-chart>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VChart from 'v-charts/lib/chart'
import { getCityData } from '@/api/city'

export default {
    name: 'SmartCityCenter',
    components: {
        VChart
    },
    data() {
        return {
            mapOptions: {
                bmap: {
                    center: [116.404, 39.915], // 地图中心点
                    zoom: 14, // 地图缩放级别
                    roam: true, // 是否开启拖拽和缩放
                    mapStyle: { // 地图样式
                        styleJson: [
                            {
                                'featureType': 'water',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#d1d1d1'
                                }
                            },
                            {
                                'featureType': 'land',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#f3f3f3'
                                }
                            },
                            {
                                'featureType': 'railway',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'highway',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#fdfdfd'
                                }
                            },
                            {
                                'featureType': 'highway',
                                'elementType': 'labels',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'arterial',
                                'elementType': 'geometry',
                                'stylers': {
                                    'color': '#fefefe'
                                }
                            },
                            {
                                'featureType': 'arterial',
                                'elementType': 'geometry.fill',
                                'stylers': {
                                    'color': '#fefefe'
                                }
                            },
                            {
                                'featureType': 'poi',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'green',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'subway',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'manmade',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'local',
                                'elementType': 'all',
                                'stylers': {
                                    'visibility': 'off'
                                }
                            },
                            {
                                'featureType': 'boundary',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#fefefe'
                                }
                            },
                            {
                                'featureType': 'building',
                                'elementType': 'all',
                                'stylers': {
                                    'color': '#d1d1d1'
                                }
                            },
                            {
                                'featureType': 'label',
                                'elementType': 'labels.text.fill',
                                'stylers': {
                                    'color': '#999999'
                                }
                            }
                        ]
                    }
                }
            },
            pieOptions: {
                // 饼状图配置项
            },
            barOptions: {
                // 柱状图配置项
            },
            lineOptions: {
                // 折线图配置项
            }
        }
    },
    computed: {
        ...mapState(['cityData']),
        // 计算属性，用于更新数据
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const data = await getCityData()
            // 处理数据，更新配置项
            console.log(data)
        }
    }
}
</script>

<style scoped>
.smart-city-center {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.map-container {
    flex: 1;
}

.chart-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 50%;
}

.pie-chart,
.bar-chart,
.line-chart {
    flex: 1;
    margin-right: 20px;
}
</style>