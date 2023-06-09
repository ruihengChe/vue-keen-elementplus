const state = {
  isCollapse: false
}

const mutations = {
  SET_COLLAPSE: (state) => {
    state.isCollapse = !state.isCollapse
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
