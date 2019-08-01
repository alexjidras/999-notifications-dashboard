import * as c from '../constants/mutations'

export const state = () => ({
  lastSubscriptions: [],
  subscriptions: [],
  lastSubscriptionCount: 0,
  subscriptionCount: 0,
  loading: false,
  error: null
})

export const actions = {
  async getLastSubscriptions({ commit }) {
    try {
      commit('GET_LAST_SUBSCRIPTION_REQUEST')
      const { data } = await this.$axios.get('/subscription')
      commit('GET_LAST_SUBSCRIPTION_SUCCESS', data.subscriptions)
      commit('GET_LAST_SUBSCRIPTION_COUNT_SUCCESS', data.subscriptionCount)
    } catch (e) {
      commit('GET_LAST_SUBSCRIPTION_ERROR', e)
    }
  },
  async getSubscriptions({ commit }, payload = { page: 1, limit: 10 }) {
    try {
      commit('GET_SUBSCRIPTION_REQUEST')
      const { data } = await this.$axios.get(`/subscription?page=${payload.page}&limit=${payload.limit}`)
      commit('GET_SUBSCRIPTION_SUCCESS', data.subscriptions)
      commit('GET_SUBSCRIPTION_COUNT_SUCCESS', data.subscriptionCount)
    } catch (e) {
      commit('GET_SUBSCRIPTION_ERROR', e)
    }
  }
}

export const mutations = {
  [c.GET_SUBSCRIPTION_REQUEST](state) {
    state.loading = true
  },
  [c.GET_SUBSCRIPTION_SUCCESS](state, data) {
    state.loading = false
    state.subscriptions = data
  },
  [c.GET_SUBSCRIPTION_ERROR](state, e) {
    state.loading = false
    state.error = e
  },
  [c.GET_SUBSCRIPTION_COUNT_SUCCESS](state, data) {
    state.loading = false
    state.subscriptionCount = data
  },
  [c.GET_LAST_SUBSCRIPTION_REQUEST](state) {
    state.loading = true
  },
  [c.GET_LAST_SUBSCRIPTION_SUCCESS](state, data) {
    state.loading = false
    state.lastSubscriptions = data
  },
  [c.GET_LAST_SUBSCRIPTION_ERROR](state, e) {
    state.loading = false
    state.error = e
  },
  [c.GET_LAST_SUBSCRIPTION_COUNT_SUCCESS](state, data) {
    state.loading = false
    state.lastSubscriptionCount = data
  }
}
