// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Header,
  // ButtonAddTransactions,
  Navigation,
  Balance,
  Currency,
} from "../../components";

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

import {
  BackgroundContainer,
  // BackgroundElipseBlue,
  // BackgroundElipsePink,
  Wrapper,
  WrapperNav,
  BalanceNav,
  CurrencyNav,
  WrapperLeftAndUpSite,
  WrapperRightAndDownSite,
  WrapperNavBal,
} from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <BackgroundContainer>
        {/* <BackgroundElipseBlue /> */}
        {/* <BackgroundElipsePink /> */}

        <Wrapper>
          <WrapperLeftAndUpSite>
            <WrapperNavBal>
              <WrapperNav>
                <Navigation />
              </WrapperNav>
              <BalanceNav>
                <Balance />
              </BalanceNav>
            </WrapperNavBal>
            <CurrencyNav>
              <Currency />
            </CurrencyNav>
          </WrapperLeftAndUpSite>
          <WrapperRightAndDownSite>
            <Outlet />
          </WrapperRightAndDownSite>
        </Wrapper>
      </BackgroundContainer>
    </div>
  );
};
