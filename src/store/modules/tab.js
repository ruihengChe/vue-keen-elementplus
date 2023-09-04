/* eslint-disable */
import Cookie from 'js-cookie'
const state = {
    menu: [],
    currentMenu: null,
    tabsList: [
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {
                title: '控制台',
                icon: 'HomeFilled',
                isfixed: true
            }
        }
    ]
}

const mutations = {
    // 设置菜单
    setMenu (state, val) {
        state.menu = val
        Cookie.set('menu', JSON.stringify(val))
        console.log(val, 'setMenu')
    },
    // 清除菜单,退出登录时调用
    clearMenu (state) {
        state.menu = []
        Cookie.remove('menu')
    },
    // 添加菜单
    addMenu (state, router) {
        const menu = JSON.parse(Cookie.get('menu'))
        if (!menu) {
            return
        }
        state.menu = menu
        const currentMenu = [
            {
                path: '/',
                component: () => import(`@/layout/layoutView`),
                children: []
            }
        ]
        menu.forEach(item => {
            if (item.children) {
              item.children = item.children.map(item => {
                item.component = () => import(`@/views/${item.url}`)
                return item
              })
              currentMenu[0].children.push(...item.children)
            } else {
              item.component = () => import(`@/views/${item.url}`)
              currentMenu[0].children.push(item)
            }
          })
          console.log('addMenu的menu:', menu)
        console.log(currentMenu, 'currentMenu')
        router.addRoute(currentMenu)
    },
    selectMenu (state, val) {
        if (val.name !== 'dashboard') {
            state.currentMenu = val
            const result = state.tabsList.findIndex(item => item.name === val.name)
            if (result === -1) {
                state.tabsList.push(val)
            }
        } else {
            state.currentMenu = val
        }
    },
    closeTab (state, val) {
        const result = state.tabsList.findIndex(item => item.name === val.name)
        state.tabsList.splice(result, 1)
    }

}

const actions = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
