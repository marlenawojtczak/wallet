export const selectUser = (state) => state.session.user;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const selectIsRefreshing = (state) => state.session.isRefreshing;
export const selectRegistrationError = (state) => state.session.error;
export const selectToken = (state) => {
  const token = state.session.token;
  // console.log("Token:", token);
  return token;
};
