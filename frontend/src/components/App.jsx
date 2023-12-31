import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SharedLayout, AccessLayout } from "../components";
import { PrivateRoute } from "../routes/PrivateRoute";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { currentUser } from "../redux/session/operations";
import { Loader } from "../components";
import { TokenRefresher } from "./TokenRefresher";
import { ToastContainer } from "react-toastify";
import { selectIsLoading } from "../redux/global/selectors";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Register = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const Login = lazy(() => import("../pages/LoginPage/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage/StatisticsPage"));
const Currency = lazy(() => import("../pages/CurrencyPage/CurrencyPage"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : null}
        <Routes>
          <Route element={<AccessLayout />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/login" />
              }
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={Login} redirectTo="/home" />}
            />
          </Route>
          <Route element={<SharedLayout />}>
            <Route
              path="/home"
              element={<PrivateRoute component={Home} redirectTo="/login" />}
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute component={Statistics} redirectTo="/login" />
              }
            />
            <Route
              path="/currency"
              element={
                <PrivateRoute component={Currency} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
      <TokenRefresher />
      <ToastContainer />
    </>
  );
};
