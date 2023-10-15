import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { selectUser, selectSession } from "../../redux/session/selectors";
import { refreshAuthTokens } from "../../redux/session/operations";

export const TokenRefresher = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const session = useSelector(selectSession);

  const accessToken = user?.accessToken;
  const refreshToken = user?.refreshToken;
  const sessionId = session?.sid;

  useEffect(() => {
    const refreshInterval = 840000;

    const refreshTokensIfNecessary = () => {
      if (!refreshToken || !sessionId) {
        return;
      }

      const decodedAccessToken = jwtDecode(accessToken);
      const expirationTime = decodedAccessToken.exp * 1000 - 60000;
      const now = Date.now();

      if (now >= expirationTime) {
        dispatch(refreshAuthTokens(sessionId, refreshToken));
      }
    };

    refreshTokensIfNecessary();

    const intervalId = setInterval(refreshTokensIfNecessary, refreshInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [accessToken, refreshToken, sessionId, dispatch]);

  return null;
};
