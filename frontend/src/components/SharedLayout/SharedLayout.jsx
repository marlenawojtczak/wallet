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
  FotterPositionBig,
  FotterPosition,
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
                  <FotterPositionBig>
                    <FooterWrapper>
                      <Footer />
                    </FooterWrapper>
                  </FotterPositionBig>
                )}
              </WrapperLeftAndUpSite>
              <WrapperRightAndDownSite>
                <Outlet />
              </WrapperRightAndDownSite>
            </Wrapper>
            {windowWidth < 1280 && (
              <FotterPosition>
                <FooterWrapper>
                  <Footer />
                </FooterWrapper>
              </FotterPosition>
            )}
          </MaxWrapper>
        </Filter>
      </BackgroundContainer>
    </>
  );
};
