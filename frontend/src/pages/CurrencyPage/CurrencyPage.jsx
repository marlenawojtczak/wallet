import { Helmet } from "react-helmet";
import { Currency } from "../../components/Currency/Currency";
import Media from "react-media";
import { useNavigate } from "react-router-dom";

const CurrencyPage = () => {
  const navigate = useNavigate();

  return (
    <Media query="(max-width: 767px)">
      {(matches) =>
        matches ? (
          <>
            <Helmet>
              <title>Currency</title>
            </Helmet>
            <Currency />
          </>
        ) : (
          <>{navigate("/home")}</>
        )
      }
    </Media>
  );
};

export default CurrencyPage;
