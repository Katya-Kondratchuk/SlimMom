export const selectAuthIsLoadCurrentUser = state =>
  state.auth.isLoadCurrentUser;
export const selectAuthUserInfo = state => state.auth.user;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthRefreshToken = state => state.auth.refreshToken;
