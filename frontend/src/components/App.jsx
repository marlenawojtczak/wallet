import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  SharedLayout,
  AccessLayout,
  ModalLogout,
  ModalAddTransaction,
  ModalEditTransaction,
} from "../components";
import { PrivateRoute } from "../routes/PrivateRoute";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "../components";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "../components/darkMode/globalStyles";
// import { lightTheme, darkTheme } from "../components/darkMode/Themes";
// import { useDarkMode } from "../components/darkMode/useDarkMode";
// import Toggle from "./darkMode/Toggler";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Register = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const Login = lazy(() => import("../pages/LoginPage/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage/StatisticsPage"));
const Currency = lazy(() => import("../pages/CurrencyPage/CurrencyPage"));

export const App = () => {
  // const [theme, themeToggler, mountedComponent] = useDarkMode();
  // const themeMode = theme === "light" ? lightTheme : darkTheme;

  const { getCurrentUser } = useAuth();
  useEffect(() => {
    getCurrentUser();
  }, []);

  // if (!mountedComponent) return <div />;
  return (
    // <ThemeProvider theme={themeMode}>
    <>
      {/* <GlobalStyles /> */}
      {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}

      <Suspense fallback={<Loader />}>
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
    </>
    // </ThemeProvider>
  );
};
