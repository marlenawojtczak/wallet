import { Helmet } from "react-helmet";
import img from "../../assets/temporary/currencypage.jpg";

const CurrencyPage = () => {
  return (
    <>
      <Helmet>
        <title>Currency</title>
      </Helmet>
      {/* HERE PUT YOUR COMPONENTS  */}

      {/* YOU CAN DELETE CODE BELOW LATER */}
      <ul>
        This is <b>Currency Page</b>. Please import and use here{" "}
        <b>componets </b>
        like:
        <hr />
        <li>Navigation</li>
        <li>Currency</li>
      </ul>

      <img src={img} width="500" alt="Currencypage" />
    </>
  );
};

export default CurrencyPage;
