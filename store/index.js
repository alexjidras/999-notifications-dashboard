export const getters = {
  isAuthenticated({ auth }) {
    return auth.loggedIn
  }
}
