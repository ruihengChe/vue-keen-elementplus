import Mock from 'mockjs'
import dashboardAPI from './dashboard'
import permissionApi from './permission'

// 为了模拟请求，设置延时请求数据
Mock.setup({
    timeout: '200-2000'
})

// dashboard相关
Mock.mock(/\/dashboard\/getData/, 'get', dashboardAPI.getDashboardData)

// 权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)
