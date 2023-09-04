// import router from '@/router'

const state = {
    tabsMenuList: [],
    keepAliveList: [],
    currentPath: ''
}

const mutations = {
    ADD_TABS_MENU: (state, menu) => {
        // state.tabsMenuList.push(menu)
        if (state.tabsMenuList.every(item => item.path !== menu.path)) {
            state.tabsMenuList.push(menu)
        }
    },
    REMOVE_TABS_MENU: (state, menu) => {
        const index = state.tabsMenuList.findIndex(item => item.path === menu.path)
        state.tabsMenuList.splice(index, 1)
    },
    SET_KEEP_ALIVE: (state, menu) => {
        state.keepAliveList = menu
    },
    ADD_KEEP_ALIVE: (state, menu) => {
        !this.keepAliveList.includes(name) && this.keepAliveList.push(name)
    },
    REMOVE_KEEP_ALIVE: (state, menu) => {
        this.keepAliveList = this.keepAliveList.filter(item => item !== name)
    }
}

const actions = {
    addTabsMenu ({ commit }, menu) {
        commit('ADD_TABS_MENU', menu)
    },
    removeTabsMenu ({ commit }, menu) {
        commit('REMOVE_TABS_MENU', menu)
    },
    setKeepAlive ({ commit }, menu) {
        commit('SET_KEEP_ALIVE', menu)
    },
    addKeepAlive ({ commit }, menu) {
        commit('ADD_KEEP_ALIVE', menu)
    },
    removeKeepAlive ({ commit }, menu) {
        commit('REMOVE_KEEP_ALIVE', menu)
    },
    closeTabsMenu ({ commit, state }, menu) {
        return new Promise((resolve, reject) => {
            commit('REMOVE_TABS_MENU', menu)
            commit('REMOVE_KEEP_ALIVE', menu)
            resolve(state.tabsMenuList)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
