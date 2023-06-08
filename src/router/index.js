import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../layout/indexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    hidden: true,
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    hidden: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // 控制台
  {
    path: '/console',
    name: 'console',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '控制台',
          icon: 'HomeFilled'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/console/indexView.vue')
      }
    ]
  },
  // 用户管理
  {
    path: '/users',
    name: 'users',
    component: Layout,
    children: [
      {
        path: '/users',
        name: 'users',
        meta: {
          title: '用户管理',
          icon: 'Avatar'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/users/indexView.vue')
      }
    ]
  }
  // 项目管理：管理各个工地的基本信息、进度、质量、安全等情况。
  // 计划管理：规划和安排各项工程任务，并且协调不同部门和承包商的工作计划
  // 材料管理：管理每个阶段所需的材料清单，确保及时供应
  // 资产管理：管理工地相关的资产、设备、机械等信息。
  // 人员管理模块：管理员工信息、考勤、薪资、福利等
  // 安全管理模块：管理施工现场的安全事故、风险评估、应急处理等方面
  // 质量管理模块：管理施工现场的各种质量问题和合规事项。
  // 统计分析模块：对工地所有数据进行汇总、分析、报表等，以便管理者能够及时做出决策和调整。
  // 系统设置模块：管理账号、权限、角色、日志等系统设置。
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
