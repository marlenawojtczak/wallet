import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout } from "../components";
// import { ProtectedRoute } from "../helpers/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import { ModalLogout } from "./ModalLogout";
// import { ModalAddTransaction } from "./ModalAddTransaction";
// import { ModalEditTransaction } from "./ModalEditTransaction";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";

// import { SharedLayout } from "./components";
// import { PrivateRoute } from "../PrivateRoute";
// import { RestrictedRoute } from "../RestrictedRoute";

// const Home = lazy(() => import("../../pages/Home"));
// const Register = lazy(() => import("../../pages/Register"));
// const Login = lazy(() => import("../../pages/Login"));
// const Contacts = lazy(() => import("../../pages/Contacts"));

// const mediaQueries = {
//   mobile: "(max-width: 768px)",
//   tablet: "(min-width: 769px) and (max-width: 1279px)",
//   desktop: "(min-width: 1280px)",
// };

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
      <HomeTab />
      <Navigation />
    </>
  );
};
