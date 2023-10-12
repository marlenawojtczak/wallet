import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout, BackgroundImage } from "../components";
import { PrivateRoute } from "../routes/PrivateRoute";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Register = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const Login = lazy(() => import("../pages/LoginPage/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage/StatisticsPage"));
const Currency = lazy(() => import("../pages/CurrencyPage/CurrencyPage"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<BackgroundImage />}>
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
        <ToastContainer
          position="top-center"
          autoClose={2500}
          pauseOnHover={false}
        />
      </Suspense>
    </>
  );
};
