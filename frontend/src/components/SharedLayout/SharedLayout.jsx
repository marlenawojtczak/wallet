// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  Header,
  // ButtonAddTransactions,
  Navigation,
  Balance,
  Currency,
} from "../../components";
import { useSpring, animated } from "react-spring";

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
  Filter,
  Wrapper,
  WrapperNav,
  BalanceNav,
  CurrencyNav,
  WrapperLeftAndUpSite,
  WrapperRightAndDownSite,
  WrapperNavBal,
} from "./SharedLayout.styled";

export const SharedLayout = () => {
  const springAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  });
  return (
    <>
      <Header />
      <BackgroundContainer>
        <Filter>
          <Wrapper>
            <WrapperLeftAndUpSite>
              <WrapperNavBal>
                <animated.div style={springAnimation}>
                  <WrapperNav>
                    <Navigation />
                  </WrapperNav>
                </animated.div>
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
        </Filter>
      </BackgroundContainer>
    </>
  );
};
