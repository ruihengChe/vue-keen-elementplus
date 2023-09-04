import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Layout from '../layout/layoutView.vue'

const routes = [
    // 登录
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import(/* webpackChunkName: "Login" */ '../views/account/loginView.vue')
    },
    // 控制台
    {
        path: '/',
        name: 'console',
        component: Layout,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '控制台',
                    icon: 'HomeFilled',
                    isfixed: true
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/console/consoleView.vue')
            }
        ]
    },
    // 用户管理
    {
        path: '/user',
        name: 'user',
        component: Layout,
        children: [
            {
                path: '/users',
                name: 'users',
                meta: {
                    title: '用户管理',
                    icon: 'Avatar'
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/users/usersView.vue')
            }
        ]
    },
    // 功能管理
    {
        path: '/plugins',
        name: 'plugins',
        component: Layout,
        meta: {
            title: '功能管理',
            icon: 'HelpFilled'
        },
        children: [
            {
                path: '/download',
                name: 'download',
                meta: {
                    title: '下载管理',
                    icon: 'List'
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/plugins/downloadView.vue')
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传管理',
                    icon: 'UploadFilled'
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/plugins/uploadView.vue')
            }
        ]
    },
    // 开发日志
    {
        path: '/log',
        name: 'log',
        component: Layout,
        children: [
            {
                path: '/logs',
                name: 'logs',
                meta: {
                    title: '开发日志',
                    icon: 'Avatar'
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/logs.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
