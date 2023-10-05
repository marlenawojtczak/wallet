<<<<<<< HEAD
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
=======
import { React } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
>>>>>>> 05.10

// import { SharedLayout } from "./components";
// import { PrivateRoute } from "../PrivateRoute";
// import { RestrictedRoute } from "../RestrictedRoute";

// const Home = lazy(() => import("../../pages/Home"));
// const Register = lazy(() => import("../../pages/Register"));
// const Login = lazy(() => import("../../pages/Login"));
// const Contacts = lazy(() => import("../../pages/Contacts"));

export const App = () => {
  // const {
  //   isModalLogoutOpen,
  //   isModalAddTransactionOpen,
  //   isModalEditTransactionOpen,
  // } = useSelector((state) => state.global);

  return (
    <>
      <HomePage />
    </>
  );
};
