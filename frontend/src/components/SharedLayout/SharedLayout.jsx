import { Outlet } from "react-router-dom";
import {
  Header,
  // ButtonAddTransactions,
  Navigation,
  Balance,
  Currency,
} from "../../components";
import { useSpring, animated } from "react-spring";
import { Footer } from "../../components/Footer/Footer";

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
  MaxWrapper,
} from "./SharedLayout.styled";

export const SharedLayout = () => {
  const springAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  });
  return (
    <>
      <BackgroundContainer>
        <Filter>
          <MaxWrapper>
            <Header />
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
          </MaxWrapper>
          <Footer />
        </Filter>
      </BackgroundContainer>
    </>
  );
};
