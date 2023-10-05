import { Helmet } from "react-helmet";

import img from "../assets/temporary/homepage.jpg";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
