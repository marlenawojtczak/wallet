import { Helmet } from "react-helmet";
import { Currency } from "../../components/Currency/Currency";
import { Balance } from "../../components";

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
