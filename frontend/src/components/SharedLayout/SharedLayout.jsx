import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header, Navigation, Balance, Currency } from "../../components";
import { Footer } from "../../components/Footer";

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
  FooterWrapper,
} from "./SharedLayout.styled";

export const SharedLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BackgroundContainer>
        <Filter>
          <MaxWrapper>
            <Header />
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
                {windowWidth >= 1280 && (
                  <FooterWrapper>
                    <Footer />
                  </FooterWrapper>
                )}
              </WrapperLeftAndUpSite>
              <WrapperRightAndDownSite>
                <Outlet />
              </WrapperRightAndDownSite>
            </Wrapper>
            {window.innerWidth >= 768 && window.innerWidth < 1280 && (
              <FooterWrapper>
                <Footer />
              </FooterWrapper>
            )}
          </MaxWrapper>
        </Filter>
        {window.innerWidth < 768 && <Footer />}
      </BackgroundContainer>
    </>
  );
};
