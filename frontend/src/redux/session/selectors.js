export const selectUser = (state) => state.session.user;
export const selectAccessToken = (state) => state.session.user.accessToken;
export const selectSession = (state) => state.session.session;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const selectIsRefreshing = (state) => state.session.isRefreshing;
export const selectRegistrationError = (state) => state.session.error;
