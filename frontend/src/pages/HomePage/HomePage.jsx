import { Helmet } from "react-helmet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeTab } from "../../components/HomeTab";
import { Wrapper, X, Y } from "./HomePage.styled";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { ButtonScroll } from "../../components/ButtonScroll/ButtonScroll";
import { ModalAddTransaction } from "../../components/ModalAddTransaction";
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from "../../redux/global/globalSlice";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors";
import Media from "react-media";
import { Balance } from "../../components";

const HomePage = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalAddTransactionOpen);

  const handleOpenModal = () => {
    dispatch(openModalAddTransaction());
  };

  const handleCloseModal = () => {
    dispatch(closeModalAddTransaction());
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
      <Wrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Media query={{ maxWidth: 767 }}>
          {(matches) => (matches ? <Balance /> : <></>)}
        </Media>
        <HomeTab />
        <X>
          <ButtonAddTransactions onClick={handleOpenModal} />
        </X>
        <Y>
          <ButtonScroll onClick={handleScroll} />
        </Y>
        <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
      </Wrapper>
    </>
  );
};
export default HomePage;
