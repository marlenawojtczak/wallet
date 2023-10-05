import { React } from "react";
import { Navigation } from "./Navigation";
import { HomeTab } from "./HomeTab";
import Media from "react-media";
import { Route, Routes } from "react-router-dom";

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
