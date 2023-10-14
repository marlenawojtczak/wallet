import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { HomeTab } from "../../components/HomeTab";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { ModalAddTransaction } from "../../components/ModalAddTransaction";
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from "../../redux/global/globalSlice";
import { selectIsModalAddTransactionOpen } from "../../redux/global/selectors";

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
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeTab />
      <ButtonAddTransactions onClick={handleOpenModal} />
      <ModalAddTransaction isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};
export default HomePage;
