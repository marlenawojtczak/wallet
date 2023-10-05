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

const Home = lazy(() => import("../pages/HomePage"));
const Register = lazy(() => import("../pages/RegistrationPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Statistics = lazy(() => import("../pages/StatisticsPage"));
const Currency = lazy(() => import("../pages/CurrencyPage"));

export const App = () => {
  // const {
  //   isModalLogoutOpen,
  //   isModalAddTransactionOpen,
  //   isModalEditTransactionOpen,
  // } = useSelector((state) => state.global);

  return (
    <>
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
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<SharedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/currency" element={<Currency />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        </Routes>
        {/* <ToastContainer
          position="top-center"
          autoClose={2500}
          pauseOnHover={false}
        /> */}
      </Suspense>
    </>
  );
};
