import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout, AccessLayout } from "../components";
import { PrivateRoute } from "../routes/PrivateRoute";
import { RestrictedRoute } from "../routes/RestrictedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";
// import { ModalLogout } from "./ModalLogout";
// import { ModalAddTransaction } from "./ModalAddTransaction";
// import { ModalEditTransaction } from "./ModalEditTransaction";
// import { motion, AnimatePresence } from "framer-motion";
// import Media from "react-media";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Register = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const Login = lazy(() => import("../pages/LoginPage/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage/StatisticsPage"));
const Currency = lazy(() => import("../pages/CurrencyPage/CurrencyPage"));

export const App = () => {
  // const {
  //   isModalLogoutOpen,
  //   isModalAddTransactionOpen,
  //   isModalEditTransactionOpen,
  // } = useSelector((state) => state.global);

  return (
    <>
      {/* <Media queries={mediaQueries}>
        {(matches) => (
          <>
            {matches.mobile && (
              <div>
                Mobile View
                <HomeTab />
              </div>
            )}
            {matches.tablet && <div>Tablet View</div>}
            {matches.desktop && <div>Desktop View</div>}
          </>
        )}
      </Media> */}

      {/* <AnimatePresence>
        {(isModalLogoutOpen ||
          isModalAddTransactionOpen ||
          isModalEditTransactionOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.08, 0.82, 0.17, 1] }}
            className="modals"
          >
            {isModalLogoutOpen && <ModalLogout />}
            {isModalAddTransactionOpen && <ModalAddTransaction />}
            {isModalEditTransactionOpen && <ModalEditTransaction />}
          </motion.div>
        )}
      </AnimatePresence> */}
      <Suspense fallback={<div>Loading...</div>}>
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
        <ToastContainer
          position="top-center"
          autoClose={2500}
          pauseOnHover={false}
        />
      </Suspense>
    </>
  );
};
