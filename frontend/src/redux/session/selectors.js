export const selectUser = (state) => state.session.user;
export const selectAccessToken = (state) => state.session.user?.accessToken;
export const selectRefreshToken = (state) => state.session.user?.refreshToken;
export const selectSessionId = (state) => state.session.session?.sid;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const selectIsRefreshing = (state) => state.session.isRefreshing;
export const selectRegistrationError = (state) => state.session.error;
