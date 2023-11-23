import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeTab } from "../../components/HomeTab";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { ButtonScroll } from "../../components/ButtonScroll/ButtonScroll";
import { ModalAddTransaction } from "../../components/ModalAddTransaction";
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from "../../redux/global/globalSlice";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors";
import { Balance } from "../../components";

import {
  ButtonWrapper,
  BalanceNav,
  Wrapper,
  ButtonWrapperMobile,
} from "./HomePage.styled";

const HomePage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalAddTransactionOpen);
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

  const handleOpenModal = () => {
    dispatch(openModalAddTransaction());
  };

  const handleCloseModal = () => {
    dispatch(closeModalAddTransaction());
    document.body.style.overflow = "auto";
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {window.innerWidth < 768 && (
        <>
          <Helmet>
            <title>Home</title>
          </Helmet>
          <BalanceNav>
            <Balance />
          </BalanceNav>
          <Wrapper>
            <HomeTab />
            <ButtonWrapperMobile>
              <ButtonAddTransactions onClick={handleOpenModal} />
            </ButtonWrapperMobile>
            <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
          </Wrapper>
        </>
      )}
      {window.innerWidth >= 768 && (
        <>
          <Helmet>
            <title>Home</title>
          </Helmet>
          <BalanceNav>
            <Balance />
          </BalanceNav>

          <HomeTab />
          <ButtonWrapper>
            {/* <ButtonScroll onClick={handleScroll} /> */}
            <ButtonAddTransactions onClick={handleOpenModal} />
          </ButtonWrapper>
          <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
        </>
      )}
    </>
  );
};
export default HomePage;
