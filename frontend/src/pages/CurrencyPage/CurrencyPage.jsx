import { Helmet } from "react-helmet";
import { Currency } from "../../components/Currency/Currency";

const CurrencyPage = () => {
  return (
    <>
      <Helmet>
        <title>Currency</title>
      </Helmet>
      <Currency />
    </>
  );
};

export default CurrencyPage;
