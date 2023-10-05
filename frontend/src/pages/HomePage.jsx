import { Helmet } from "react-helmet";
import Media from "react-media";
import img from "../assets/temporary/homepage.jpg";
import { HomeTab } from "../components/HomeTab/HomeTab";
import { Balance } from "../components/Balance/Balance";
import { Navigation } from "../components/Navigation/Navigation";
import { Currency } from "../components/Currency/Currency";
import { ButtonAddTransactions } from "../components/ButtonAddTransactions/ButtonAddTransactions";
import { Header } from "../components/Header/Header";
import { Wrapper } from "../components/HomeTab/HomeTab.styled";

const handleClick = () => {
  console.log("Add transaction");
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <Navigation />
        <Balance />
      </Wrapper>
      <Media query={{ maxWidth: 767 }}>
        {(matches) => (matches ? <></> : <Currency />)}
      </Media>

      <HomeTab />
      <ButtonAddTransactions onClick={handleClick} />

      {/* <img src={img} alt="Homepage" /> */}
    </>
  );
};

export default HomePage;
