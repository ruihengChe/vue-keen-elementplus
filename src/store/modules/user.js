const state = {
  username: 'admin',
  token: null,
  role: null
}

const getters = {
  username: state => state.username,
  token: state => state.token,
  role: state => state.role
}

const mutations = {
  SET_USER (state, payload) {
    state.username = payload.username
    state.token = payload.token
    state.role = payload.role
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
