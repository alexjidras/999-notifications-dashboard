import * as c from '../constants/mutations'

export const state = () => ({
  lastNotifications: [],
  notifications: [],
  lastNotificationCount: 0,
  notificationCount: 0,
  subIds: [],
  loading: false,
  error: null
})

export const actions = {
  async getLastNotifications({ commit }) {
    try {
      commit('GET_LAST_NOTIFICATION_REQUEST')
      const { data } = await this.$axios.get('/notification')
      commit('GET_LAST_NOTIFICATION_SUCCESS', data.notifications)
      commit('GET_LAST_NOTIFICATION_COUNT_SUCCESS', data.notificationCount)
    } catch (e) {
      commit('GET_LAST_NOTIFICATION_ERROR', e)
    }
  },
  async getNotifications({ commit }, payload = { page: 1, limit: 10, subId: '', status: 'all' }) {
    try {
      commit('GET_NOTIFICATION_REQUEST')
      const { data } = await this.$axios.get(`/notification?page=${payload.page}&limit=${payload.limit}&status=${payload.status}${payload.subId ? `&subId=${payload.subId}` : ''}`)
      commit('GET_NOTIFICATION_SUCCESS', data.notifications)
      commit('GET_NOTIFICATION_COUNT_SUCCESS', data.notificationCount)
    } catch (e) {
      commit('GET_NOTIFICATION_ERROR', e)
    }
  },
  async getSubIds({ commit }) {
    try {
      commit('GET_SUBIDS_REQUEST')
      const { data } = await this.$axios.get('/subscription/list')
      commit('GET_SUBIDS_SUCCESS', data)
    } catch (e) {
      commit('GET_SUBIDS_ERROR', e)
    }
  }
}

export const mutations = {
  [c.GET_NOTIFICATION_REQUEST](state) {
    state.loading = true
  },
  [c.GET_NOTIFICATION_SUCCESS](state, data) {
    state.loading = false
    state.notifications = data
  },
  [c.GET_NOTIFICATION_ERROR](state, e) {
    state.loading = false
    state.error = e
  },
  [c.GET_NOTIFICATION_COUNT_SUCCESS](state, data) {
    state.loading = false
    state.notificationCount = data
  },
  [c.GET_LAST_NOTIFICATION_REQUEST](state) {
    state.loading = true
  },
  [c.GET_LAST_NOTIFICATION_SUCCESS](state, data) {
    state.loading = false
    state.lastNotifications = data
  },
  [c.GET_LAST_NOTIFICATION_ERROR](state, e) {
    state.loading = false
    state.error = e
  },
  [c.GET_LAST_NOTIFICATION_COUNT_SUCCESS](state, data) {
    state.loading = false
    state.lastNotificationCount = data
  },
  [c.GET_SUBIDS_REQUEST](state) {
    state.loading = true
  },
  [c.GET_SUBIDS_ERROR](state, e) {
    state.loading = false
    state.error = e
  },
  [c.GET_SUBIDS_SUCCESS](state, data) {
    state.loading = false
    state.subIds = data
  }
}
