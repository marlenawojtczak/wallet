import { Helmet } from "react-helmet";
// import Media from "react-media";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../components/HomeTab/HomeTab.styled";
// import { Balance } from "../../components/Balance";
// import { Currency } from "../../components/Currency";
import { HomeTab } from "../../components/HomeTab";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { ModalAddTransaction } from "../../components/ModalAddTransaction";
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from "../../redux/global/globalSlice";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors";
import Media from "react-media";
import { Balance, Currency } from "../../components";

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
        {/* <Balance /> */}
        {/* <Media query={{ maxWidth: 767 }}>
          {(matches) => (matches ? <></> : <Currency />)}
        </Media> */}
        {/* <Currency /> */}
        <HomeTab />
        <Media query={{ maxWidth: 767 }}>
          {(matches) =>
            matches ? (
              <Balance />
            ) : (
              <>
                <Balance />
                <Currency />
              </>
            )
          }
        </Media>
        <ButtonAddTransactions onClick={handleOpenModal} />
        <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
      </Wrapper>
    </>
  );
};

export default HomePage;
