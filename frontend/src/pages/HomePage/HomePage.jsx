import { Helmet } from "react-helmet";
import { HomeTab } from "../../components/HomeTab";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions";
import { Balance } from "../../components/Balance";
import { Wrapper } from "./HomePage.styled";
import img from "../../assets/temporary/homepage.jpg";

const handleClick = () => {
  console.log("Add transaction");
};

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* HERE PUT YOUR COMPONENTS  */}
      <Wrapper>
        <Balance />
        <HomeTab />
        <ButtonAddTransactions onClick={handleClick} />
      </Wrapper>

      {/* YOU CAN DELETE CODE BELOW LATER */}
      <ul>
        This is <b>Home Page</b>. Please import and use here <b>componets </b>
        like:
        <hr />
        <li>Navigation</li>
        <li>Balance</li>
        <li>Currency</li>
        <li>HomeTab</li>
        <li>ButtonAddTransactions</li>
      </ul>

      <img src={img} alt="Homepage" />
    </>
  );
};

export default HomePage;
