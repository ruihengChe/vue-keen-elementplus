// import router from './router'
// import { useStore } from 'vuex'
// const store = useStore()

// 白名单路由
// const whiteList = ['/login', '/404']

// router.beforeEach(async (to, from, next) => {
//     const hasToken = localStorage.getItem('token')
// })
// router.beforeEach((to, from, next) => {
//     // 防止刷新后vuex里丢失token
//     // store.commit('getToken')
//     // 防止刷新后vuex里丢失标签列表tagList
//     store.commit('getMenu')
//     const token = store.state.user.token
//     // 过滤登录页，防止死循环
//     if (!token && to.name !== 'login') {
//         next({ name: 'login' })
//     } else {
//         next()
//     }
// })
