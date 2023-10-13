export const selectUser = (state) => state.session.user;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const selectIsRefreshing = (state) => state.session.isRefreshing;
export const selectAccesssToken = (state) => state.session.user.accessToken;
export const selectToken = (state) => {
  const token = state.session.token;
  return token;
};
export const selectRegistrationError = (state) => state.session.error;
export const selectAccesssToken = (state) => state.session.user.accessToken;
