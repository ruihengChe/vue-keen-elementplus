import { setToken, setUserName } from '@/utils/cookies'
const state = {
    username: '',
    token: '',
    role: ''
}

const getters = {
    username: state => state.username,
    token: state => state.token,
    role: state => state.role
}

const mutations = {
    SET_TOKEN (state, value) {
        state.token = value
        value && setToken(value)
    },
    SET_USERNAME (state, value) {
        state.username = value
        value && setUserName(value)
    }
}

const actions = {
    setUser ({ commit }, user) {
        commit('SET_USER', user)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
