import { Helmet } from "react-helmet";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeTab } from "../../components/HomeTab";
import { Wrapper, X } from "./HomePage.styled";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
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
        <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
      </Wrapper>
    </>
  );
};
export default HomePage;
