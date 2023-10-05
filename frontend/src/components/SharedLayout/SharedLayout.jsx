// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, ButtonAddTransactions, Navigation } from "../../components";

// export const SharedLayout = () => {
//   return (
//     <>
//       <Header />
//       <Suspense fallback={<p>Loading...</p>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};
