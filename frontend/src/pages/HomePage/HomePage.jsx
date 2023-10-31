import { Helmet } from "react-helmet";
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

import { ButtonWrapper, BalanceNav } from "./HomePage.styled";

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
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BalanceNav>
        <Balance />
      </BalanceNav>
      <HomeTab />
      <ButtonWrapper>
        <ButtonScroll onClick={handleScroll} />
        <ButtonAddTransactions onClick={handleOpenModal} />
      </ButtonWrapper>
      <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};
export default HomePage;
