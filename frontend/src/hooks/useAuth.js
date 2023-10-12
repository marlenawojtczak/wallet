import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../redux/session/selectors";
import { currentUser } from "../redux/session/operations";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const getCurrentUser = () => {
    dispatch(currentUser());
  };

  return {
    isLoggedIn,
    isRefreshing,
    user,
    getCurrentUser,
  };
};
