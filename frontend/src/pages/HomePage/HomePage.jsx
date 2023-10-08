import { Helmet } from "react-helmet";
import Media from "react-media";
import { useState } from "react";
import img from "../../assets/temporary/homepage.jpg";
import { Wrapper } from "../../components/HomeTab/HomeTab.styled";
import { Balance } from "../../components/Balance";
import { Currency } from "../../components/Currency";
import { HomeTab } from "../../components/HomeTab";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { ModalAddTransaction } from "../../components/ModalAddTransaction";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Wrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Balance />
        <Media query={{ maxWidth: 767 }}>
          {(matches) => (matches ? <></> : <Currency />)}
        </Media>

        <HomeTab />
        <ButtonAddTransactions onClick={handleOpenModal} />
        <ModalAddTransaction isOpen={modalOpen} onClose={handleCloseModal} />
      </Wrapper>

      <img src={img} alt="Homepage" />
    </>
  );
};

export default HomePage;