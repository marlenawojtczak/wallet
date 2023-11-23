import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Navigation, Balance, Currency } from "../../components";
import { Footer } from "../../components/Footer";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { ModalAddTransaction } from "../../components/ModalAddTransaction";
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from "../../redux/global/globalSlice";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors";

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
  ButtonWrapper,
  BtnWrapper,
} from "./SharedLayout.styled";

export const SharedLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalAddTransactionOpen);
  const location = useLocation();
  const isHomeRoute = location.pathname === "/home";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    dispatch(openModalAddTransaction());
  };

  const handleCloseModal = () => {
    dispatch(closeModalAddTransaction());
    document.body.style.overflow = "auto";
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

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
        {window.innerWidth < 768 && (
          <FooterWrapper>
            <Footer />
            <BtnWrapper>
              {isHomeRoute && (
                <ButtonAddTransactions onClick={handleOpenModal} />
              )}
              <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
            </BtnWrapper>
          </FooterWrapper>
        )}
      </BackgroundContainer>
    </>
  );
};
