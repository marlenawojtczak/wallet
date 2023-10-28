import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import {
  selectAccessToken,
  selectRefreshToken,
  selectSessionId,
} from "../../redux/session/selectors";
import { refreshAuthTokens } from "../../redux/session/operations";

export const TokenRefresher = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  console.log("TokenRefresher: accessToken", accessToken);
  const refreshToken = useSelector(selectRefreshToken);
  console.log("TokenRefresher: refreshToken", refreshToken);
  const sessionId = useSelector(selectSessionId);

  useEffect(() => {
    const refreshInterval = 1000;

    const refreshTokensIfNecessary = () => {
      if (!refreshToken || !sessionId) {
        return;
      }

      const decodedAccessToken = jwtDecode(accessToken);
      const expirationTime = decodedAccessToken.exp - 20;
      const currentTime = Math.floor(Date.now() / 1000);

      console.log("TokenRefresher: expirationTime", expirationTime);
      console.log("TokenRefresher: currentTime", currentTime);

      if (currentTime >= expirationTime) {
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
